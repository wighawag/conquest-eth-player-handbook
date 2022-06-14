# In-Game Marketplace

Conquest is at its core very simple. It has 3 actions: stake, send and exit

But conquest is fully composable. If you can send spaceships, it means you can also sell it or whatever really.

We added a plugin system to conquest's frontend to allow players to inject their own marketplace rules.

While we encourage players to build their own marketplaces, we provided a basic one through a default plugin

It is installed by default and can be removed/added via the plugin menu

Once installed, you ll see a blue button "Marketplace" on your planets

![](../.gitbook/assets/2022-03-22\_1920x1080\_109.png)

Upon clicking it you ll be able to setup a sale of your spaceships.

![](../.gitbook/assets/marketplace\_001.png)

You can specify the price per 10,000 spaceships as well as

* the number of spaceships you want to leave on the planet (so your planet keep some defense)
* the maximum number of spaceships you want to sell before the sale get canceled (default to infinite)

Once the tx get confirmed (the current version do not show progress, so be patient), you ll be able to cancel it at any time

![](../.gitbook/assets/marketplace\_002.png)

![](../.gitbook/assets/marketplace\_004.png)

Once a sale is setup a blue circle will show up on the map for you and any other player with the plugin installed

![](../.gitbook/assets/marketplace\_003.png)

You can use these planets as origin even if they are not your. You can basically buy a fleet from these planet to either attack other or purchase spaceships for your own protection

![](../.gitbook/assets/marketplace\_000.png)
