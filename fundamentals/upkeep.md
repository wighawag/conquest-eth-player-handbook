# Upkeep

Upkeep is a mechanism that go along with the planet production cap.

While the production cap prevent a planet from stock piling spaceships by reducing the number of spaceships, upkeep prevent a player from sending spaceships around to avoid the production cap.

## Rules

It ranges from -CAP to + CAP where CAP is the production cap of the planet&#x20;

### Effects

When upkeep is positive, planet production (if currently active) is fully stopped

Upkeep always decrease over time, but decrease even more in these condition:&#x20;

* if the spaceship population = CAP, then upkeep is decreased by production
* if the spaceship population > CAP, then upkeep is also decreased, this time by prodution + decrease
* if the spaceship population < CAP, then upkeep only decrease if it is positive and would then decrase by production/2

### Sending Spaceships generate upkeep

Upkeep increase whenever you send spaceships and the resulting number of spaceship on the planet becomes or remains less than CAP

When a fleet arrive the upkeep is refunded the more shorter the distance was

## Examples

CAP = 400,000, currentSpaceships = 600,000, upkeep = -100,000

a) I send 150,000 spaceships

currentSpaceships becomes 450,000

upkeep is not increased (because no spaceships will be produced (> CAP))

currentSpaceships continue to decrease as it over CAP and so upkeep also decrease (but for the example we assume all is instant)

b) I then send 200,000 spaceships

currentNumSpaceships becomes 250,000 (now under CAP)

upkeep is now increased, because the planet will now create spaceships, it increase by CAP - 250,000 = 150,000, so upkeep becomes 50,000

Now currentSpaceships increase as we are < CAP, but because of upkeep is now positive the production is halfed. upkeep will thus decrease

###

