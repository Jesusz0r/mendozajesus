# AGENTS.md

## Project Guidelines

These rules apply to all work in this repository.

When multiple solutions are correct, prefer the solution that introduces the least new complexity, reuses existing behavior, and follows established codebase patterns.

Simplicity does not override correctness, security, data integrity, or explicit product requirements.

### Decision Priority

When guidelines appear to conflict, use this priority:

1. Correctness and data integrity
2. Security and authorization
3. Explicit task and product requirements
4. Existing public contracts that are not part of the requested change
5. Established codebase architecture and conventions
6. Simplicity, reuse, and locality
7. Developer convenience

Do not choose a simpler implementation if it weakens a higher-priority requirement.

---

## One Canonical Implementation

The codebase should have **one canonical way to perform each responsibility**.

If an implementation already owns a responsibility, reuse it, extend it, or replace it.

Do not introduce a parallel implementation.

* Never duplicate business logic to support different callers.
* Never create two helpers, services, components, modules, routes, APIs, or workflows that perform the same responsibility.
* Never create a second implementation merely because changing existing callers requires more work.
* Never keep both an old implementation and a replacement implementation active.
* Never maintain separate "legacy" and "new" internal code paths.
* Never use backwards compatibility as justification for duplicated application logic.
* Never use simplicity as justification for duplicating behavior instead of fixing the canonical implementation.

When replacing behavior:

1. Implement or update the canonical behavior.
2. Migrate every internal caller to it.
3. Remove the old behavior.
4. Remove obsolete helpers, types, routes, configuration, tests, documentation, exports, and dependencies.
5. Verify that only one implementation remains.

The desired end state is:

> One responsibility. One canonical implementation. No parallel path.

---

## No Backwards Compatibility

Do not preserve obsolete implementations merely to maintain backwards compatibility.

* Never add permanent backwards compatibility layers, shims, deprecated aliases, legacy toggles, fallback implementations, or parallel code paths.
* Do not preserve an old internal API when all callers can be migrated to the new API.
* Do not preserve old function signatures by forwarding them to new implementations when the callers are under our control.
* Do not keep old behavior behind feature flags after the replacement behavior becomes canonical.
* Do not keep obsolete code because it might be useful later.
* Do not preserve old behavior alongside replacement behavior.

### Internal Code Has No Compatibility Requirement

Code under our control should be migrated, not supported indefinitely.

When changing an internal:

* function
* helper
* component
* hook
* module
* class
* service
* type
* interface
* route
* API used only internally

update its consumers.

Prefer:

```text
change abstraction
update all callers
delete old interface
```

over:

```text
change abstraction
keep old interface
add forwarding wrapper
support both
```

Backwards compatibility is for genuine external constraints, not an excuse to avoid completing a refactor.

### Temporary Migration Mechanics

Temporary compatibility is acceptable only when an external constraint makes an atomic migration impossible.

Examples include:

* zero-downtime database migrations
* rolling deployments where different application versions briefly coexist
* externally consumed APIs that cannot be migrated atomically
* external clients outside our control
* data migrations that require an intermediate state

Even in these cases:

* Keep one canonical business implementation.
* Do not duplicate domain or application logic.
* Put temporary compatibility at the narrowest possible boundary.
* Temporary adapters must delegate to the canonical implementation.
* Do not introduce parallel internal architectures.
* Do not maintain separate old and new workflows.
* Do not spread compatibility conditionals throughout the codebase.
* Migrate internal callers immediately when they are under our control.
* Give temporary compatibility code a clear removal condition.
* Remove it as soon as the external constraint no longer exists.

Acceptable:

```text
legacy external request
        |
temporary adapter
        |
canonical implementation
```

Not acceptable:

```text
legacy request -> legacy implementation
new request    -> new implementation
```

### Database Migrations

Expand-and-contract database migrations can temporarily require schema overlap.

Schema overlap does not justify duplicated application behavior.

Prefer:

```text
temporary schema compatibility
        |
single application behavior
        |
canonical data model
```

Avoid:

```text
old schema -> old application path
new schema -> new application path
```

If temporary dual reads or dual writes are genuinely required for deployment safety, keep them:

* localized
* short-lived
* inside one canonical implementation
* free of duplicated business rules
* associated with a clear removal condition

### Removal Means Removal

When a feature or behavior is intentionally removed, remove everything that exists only to support it, including:

* implementation
* UI
* routes
* APIs
* database structures when safe to remove
* configuration
* feature flags
* types
* helpers
* tests
* documentation
* exports
* dependencies
* compatibility code
* consumers

Do not leave dead architecture behind.

---

## No Overengineering

Optimize for:

* simplicity
* clarity
* locality
* reuse
* maintainability

The goal is not to write the fewest lines of code.

The goal is to introduce the **smallest amount of new complexity required to solve the current problem correctly**.

Do not optimize for hypothetical future requirements.

### Implementation Decision Order

When solving a problem, prefer solutions in this order:

1. Use existing functionality as-is.
2. Compose existing functions, helpers, modules, components, or primitives.
3. Make a small change to an existing abstraction.
4. Add a small local helper.
5. Add a new reusable abstraction.
6. Introduce a new architectural pattern, dependency, or subsystem.

Move down this list only when the previous option does not solve the problem cleanly.

Before creating something new, search the relevant codebase area for an existing solution or established pattern.

**Do not create a second way of doing something the codebase already knows how to do.**

This order must never be interpreted as permission to duplicate behavior.

If an existing implementation must be replaced, migrate its callers and remove it rather than adding a second implementation alongside it.

### Prefer the Simplest Correct Solution

* Build the smallest solution that fully satisfies the current requirements.
* Prefer straightforward code over clever, generic, highly configurable, or overly abstract code.
* Prefer explicit behavior when abstraction would make the implementation harder to understand.
* Prefer sensible defaults over configuration.
* Prefer one clear workflow over several configurable workflows unless multiple workflows are explicitly required.
* Do not add abstractions, generics, options, extension points, or configuration for hypothetical requirements.
* Do not make code extensible "just in case."
* Do not solve adjacent problems unless they are necessary for the requested change.
* Do not redesign unrelated architecture while implementing a local feature or fix.

Implement today's requirement cleanly.

Refactor when a concrete requirement justifies the refactor.

### Minimize Conceptual Surface Area

Every new concept has a maintenance cost.

When choosing between correct implementations, prefer the one with:

* fewer concepts
* fewer layers
* fewer abstractions
* fewer indirections
* fewer public APIs
* fewer configuration options
* fewer possible states
* fewer dependencies
* less cross-file coordination
* less knowledge required to understand the behavior

Do not measure simplicity by line count.

A slightly longer direct implementation can be substantially simpler than a shorter implementation that requires several abstractions.

Do not collapse meaningful boundaries merely to reduce the number of files or classes.

Security boundaries, transaction boundaries, domain boundaries, lifecycle boundaries, and external-system boundaries may justify additional structure.

---

## Reuse Existing Behavior Before Creating New Behavior

Before introducing a new helper, utility, module, service, hook, component, class, or abstraction:

1. Search for existing functionality that already solves or partially solves the problem.
2. Confirm that the existing behavior has the same semantics.
3. Reuse it directly when it fits.
4. Compose existing primitives when the composition remains easy to understand.
5. Extend an existing abstraction when the new behavior belongs to the same responsibility.
6. Replace an existing abstraction when its current design no longer fits and the responsibility remains the same.
7. Create something new only when no existing concept cleanly owns the responsibility.

Prefer the codebase's existing:

* domain concepts
* terminology
* functions
* helpers
* components
* modules
* framework capabilities
* error-handling patterns
* architectural patterns
* dependencies

Do not introduce new terminology for a concept that already has an established name.

Do not create parallel helpers with slightly different names for the same responsibility.

Do not create a new abstraction solely to avoid modifying an existing one.

Do not force reuse when it:

* creates awkward coupling
* violates an abstraction's responsibility
* changes its meaning
* requires excessive conditionals
* makes the existing abstraction harder to understand

Reuse must reduce total complexity.

If the existing abstraction is wrong for the responsibility, replace or refactor it instead of building a competing implementation beside it.

---

## Shared Behavior, Not Premature Abstraction

Centralize genuinely shared behavior.

Do not abstract superficial similarity.

* Prefer direct, readable code until a stable shared concept is evident.
* Do not extract code merely because two pieces of code look similar.
* Similar syntax does not necessarily mean shared responsibility.
* Extract shared behavior when multiple concrete consumers need the same semantics and the shared concept is clear.
* Two consumers are usually sufficient evidence when the common responsibility is stable and meaningful.
* Do not duplicate important business or domain rules merely to avoid creating an abstraction.
* A small amount of incidental duplication is preferable to the wrong abstraction.
* Do not create a generic layer for one current use case plus hypothetical future use cases.
* Do not introduce an abstraction solely to make callers shorter.
* Do not introduce a design pattern simply because the code resembles an example of that pattern.

The allowance for incidental duplication does **not** apply to duplicated responsibility.

It can be acceptable for two pieces of code to contain similar syntax.

It is not acceptable for two independent implementations to encode the same business rule or own the same responsibility.

A new abstraction should reduce total complexity, not merely move complexity behind another name.

Before creating one, ask:

* What concrete problem does this abstraction solve?
* Why can existing functionality not solve it cleanly?
* Does it represent a real domain, technical, or architectural concept?
* Does it give its consumers meaningful behavior or guarantees?
* Does it centralize a responsibility that must remain consistent?
* Does it reduce duplication of behavior rather than only duplication of syntax?
* Would the implementation be easier to understand without it?

If the answers are weak, prefer the direct implementation.

---

## Avoid Speculative Flexibility

Do not add flexibility before it is required.

Avoid:

* parameters nobody currently needs
* configuration nobody currently changes
* optional behavior without a concrete consumer
* extension points without extensions
* generic frameworks around one use case
* interfaces created only because another implementation might exist someday
* factories for straightforward object construction
* registries without multiple real entries
* strategy patterns when there is only one real strategy
* wrappers around stable APIs that add no meaningful behavior
* dependency injection where direct construction is sufficient
* callbacks or hooks without a concrete need
* feature flags without a rollout or operational requirement

Do not hard-code values that genuinely vary by environment, installation, security context, or deployment merely to avoid configuration.

Secrets and environment-specific infrastructure values must remain properly configurable.

YAGNI applies to architecture as well as features.

---

## Keep Behavior Local

Keep behavior close to the code that owns and understands it.

Prefer:

```text
caller
  -> existing helper
  -> result
```

over:

```text
caller
  -> coordinator
  -> service
  -> adapter
  -> strategy
  -> helper
  -> result
```

unless those layers represent meaningful responsibilities or boundaries.

* Keep domain behavior near its domain.
* Keep transformations near the data they transform.
* Keep validation near the boundary it protects.
* Keep UI-specific behavior near the relevant UI.
* Keep feature-specific behavior inside the feature when it is not genuinely shared.
* Avoid spreading simple behavior across many files or layers.
* Do not introduce cross-cutting infrastructure for inherently local behavior.

Locality does not override canonical ownership.

If shared behavior already has a canonical owner, call that owner instead of duplicating the behavior locally.

Do not place behavior somewhere merely because it is convenient if another module clearly owns that responsibility.

A developer should be able to understand a simple change by reading a small and predictable portion of the codebase.

---

## Avoid Pass-Through Abstractions

Do not create layers that primarily rename, wrap, or forward another API.

An abstraction should add meaningful behavior such as:

* domain policy
* validation
* transformation
* invariants
* transaction boundaries
* lifecycle management
* coordination
* error handling
* caching policy
* authorization boundaries
* isolation from an external system
* a stable interface over a genuinely unstable dependency

Do not replace several obvious operations with a vaguely named `Manager`, `Processor`, `Handler`, `Coordinator`, or `Service` unless that object owns a meaningful responsibility.

Do not create forwarding wrappers solely to preserve an obsolete internal interface.

A wrapper around an external API is justified when it provides a real project boundary, such as isolating vendor-specific behavior.

Simple workflows should remain visibly simple.

---

## Dependencies Must Earn Their Cost

Prefer solutions in this order:

1. Language features
2. Standard library
3. Framework capabilities already used by the project
4. Existing project dependencies
5. A small maintainable local implementation
6. A new dependency

Add a dependency only when it solves the problem materially better than the available alternatives.

Consider its ongoing cost:

* maintenance
* upgrades
* security
* API changes
* debugging
* documentation
* bundle or runtime cost
* conceptual overhead

Do not add a package for functionality that is trivial to implement correctly with existing tools.

Do not reimplement complex or security-sensitive functionality merely to avoid a dependency.

Prefer mature, appropriate libraries for problems such as:

* cryptography
* authentication protocols
* standards-compliant parsing
* complex serialization formats
* security-sensitive validation
* protocol implementations

"Fewer dependencies" is not a reason to implement dangerous or deceptively complex infrastructure yourself.

---

## Product Simplicity

Keep product complexity proportional to actual user needs.

* Prefer sensible defaults over user configuration.
* Add configuration when users have a concrete reason to control the behavior.
* Prefer progressive disclosure over exposing every capability at once.
* Prefer one excellent workflow over several flexible workflows unless requirements demand multiple workflows.
* Avoid exposing implementation concepts directly in the product.
* Introduce new user-facing concepts only when they represent something users genuinely need to understand or control.
* Do not make users configure something the system can reliably determine itself.
* Do not hide important choices behind automation when user intent or control is necessary.
* Do not expose separate user workflows that represent the same underlying operation unless the product requirements genuinely require distinct experiences.

System intelligence should reduce unnecessary configuration, not remove meaningful user control.

---

## Do Not Over-Refactor

Keep the scope of a change proportional to the task.

Refactor nearby code when doing so:

* materially simplifies the requested implementation
* removes an obstacle to correctness
* removes duplicated responsibility
* fixes a bug exposed by the change
* removes duplication introduced by the change
* restores a violated architectural boundary
* makes the resulting behavior substantially easier to understand

Do not use a feature or bug fix as an excuse to redesign unrelated architecture.

Do not:

* rename unrelated concepts
* reorganize unrelated modules
* replace unrelated patterns
* perform broad cleanup
* introduce a new architecture

solely because another design appears better.

However, do not preserve duplicated or obsolete implementations merely to avoid touching existing callers.

If completing the requested change requires migrating callers to maintain one canonical implementation, migrate them.

If unrelated code could be improved but is not necessary for the current task, leave it unchanged.

---

## Styling: DESIGN.md as the Single Source of Truth

`DESIGN.md` is the canonical reference for the project's design system.

* Use the colors, typography, spacing, shapes, tokens, and components defined in `DESIGN.md`.
* Use existing token references instead of duplicating their raw values.
* Never substitute inline values for an existing design token without a concrete reason.
* Reference established component names and tokens directly.
* Do not introduce accent colors, shadows, gradients, font families, or visual primitives that conflict with `DESIGN.md`.
* Reuse existing components and style patterns when their semantics match.
* Do not duplicate a shared component merely to create a visually different version of the same responsibility.
* Centralize genuinely shared styles only when multiple concrete consumers share the same semantic styling behavior.
* Do not create a generic styling abstraction for one current use case plus hypothetical future use cases.
* Keep surface-specific styles local when they are genuinely unique to that surface.

Do not modify a global token or shared component solely to satisfy one local surface unless the change is intended to apply globally.

For a legitimate local difference, prefer:

1. an existing component variant
2. composition
3. a narrowly scoped new variant
4. local styling when the behavior is truly unique

Do not duplicate an entire shared component merely to change minor styling.

Run:

```bash
npx @google/design.md lint DESIGN.md
```

after changes to `DESIGN.md` when the tooling is available.

Do not block unrelated work if the optional lint tool is unavailable unless repository tooling explicitly requires it.

---

## Database Access: RLS First

User-scoped application access must respect row-level security.

* Never use an admin client, service-role client, or another privileged connection to bypass authorization for normal user-facing requests.
* Database access performed on behalf of a user must go through proper RLS permissions.
* Enable and define appropriate RLS policies for tables that contain user or organization data.
* App-level authorization checks complement RLS. They do not replace it.
* Do not work around an RLS failure by switching a user-facing code path to privileged access.
* When user access fails because of RLS, fix the policy or access model instead of bypassing it.
* Do not create separate privileged and RLS-backed implementations of the same user-facing operation.

Privileged database access is acceptable only for trusted system operations that cannot correctly operate under user-scoped RLS, such as certain:

* migrations
* administrative maintenance jobs
* trusted background infrastructure
* system-level reconciliation tasks

Such access must:

* never depend on untrusted user authorization claims
* remain server-side
* be narrowly scoped
* validate its inputs
* not become a shortcut for normal application access

If this repository intentionally forbids privileged runtime access entirely, preserve that stricter repository invariant.

---

## Comments: ASD-STE100 Simplified Technical English

Comments added or modified as part of a change should follow ASD-STE100 Simplified Technical English principles.

* Use short and simple sentences.
* Express one idea per sentence.
* Prefer common and unambiguous words.
* Avoid unnecessary jargon, idioms, abbreviations, and marketing language.
* Use the active voice.
* Use the present tense when describing current behavior.
* Keep paragraphs short.
* Use lists when they improve clarity.
* Explain why when the reason is not obvious from the code.
* Do not repeat what the code already states clearly.
* Remove comments that no longer add useful information.

Do not rewrite unrelated existing comments solely to enforce this style.

Do not alter required literal text such as:

* protocol names
* external API terminology
* specification terminology
* commands
* identifiers
* error strings
* quoted external text

merely to make it conform to Simplified Technical English.

---

## Final Implementation Check

Before considering an implementation complete, check:

1. Did I solve the actual requested problem?
2. Did I preserve correctness, security, and data integrity?
3. Did I search for relevant existing functionality before creating something new?
4. Did I reuse existing behavior only where the semantics actually match?
5. Is there exactly one canonical implementation for each responsibility I changed?
6. Did I accidentally leave an old implementation active?
7. Did I introduce a second helper, service, component, API, or workflow for behavior that already existed?
8. Did I duplicate a business rule instead of centralizing it in its canonical owner?
9. Can any new abstraction, layer, option, or dependency be removed without making the solution worse?
10. Did I add flexibility that no current requirement needs?
11. Did I create a layer that mostly forwards calls?
12. Is the behavior located near the code that owns it?
13. Did I follow existing terminology and architectural patterns?
14. Did I migrate internal callers instead of adding compatibility wrappers?
15. Did I remove obsolete code, tests, configuration, and dependencies made unnecessary by the change?
16. Did I avoid unrelated refactoring?
17. Is this the simplest correct solution that remains easy to understand and maintain?

If a simpler solution provides the same correctness, security, clarity, and maintainability, choose the simpler solution.

If two implementations now own the same responsibility, the work is not complete.

The intended result is **boring, obvious code**.

Another experienced developer should be able to read the implementation and think:

> "Of course that's how this works."