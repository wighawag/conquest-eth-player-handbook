# Agent Service

As mentioned in [Send your first fleet](send-your-first-fleet.md) sending fleets require 2 transactions. One will make your fleet leaves its origin planet. And the second need to be performed when the fleet reaches its destination.

{% hint style="info" %}
Note that when you fleet leave your planet, it is possible that it leaves just before an attacking fleet reaches your planet. If the time difference is small enough, the attacking fleet will attack your departing fleet.

This is to prevent a kind of "front-running" strategy that would allow you to see the pending attack transaction (the transaction queue is public) and escape with your fleet.
{% endhint %}

While you can definitely come back to the game to perform the 2nd transaction, it is possible that the time is not suitable for you. We provide thus a service that will resolve the 2nd transaction for you.&#x20;

{% hint style="info" %}
In conquest.eth your fleets destination are unknown to anyone but you. Using the service thus requires you to trust the entity running it (us in that case) to not reveal your strategy.

We of course do not intend to reveal but we would also like to not have that responsibility so we are keen to see alternative mechanism to solve that problem.

Alliances could for example setup agent-service for their members.
{% endhint %}

In order to use the service you'll have to go through a registration and top-up process

![](../.gitbook/assets/2021-12-06\_1920x1080\_039.png)

![](../.gitbook/assets/2021-12-06\_1920x1080\_004.png)

You'll first need to register which require a signature from your wallet to authenticate you. This need to be done only once.

![](../.gitbook/assets/2021-12-06\_1920x1080\_005.png)

Then you will see that you have zero ETH in the agent-service account. You ll need to top it up so the agent can perform the transactions on your behalf. It require a minimum balance

{% hint style="info" %}
Since the way gas prices work on ethereum and gnosis chain, it is possible that gas price rises to a level where the minimum balance would not be enough.&#x20;

We haven chosen a default value high enough so it does not happen but technically the agent can be configured to accept even higher prices. The current UI do not allow it though.
{% endhint %}

![](../.gitbook/assets/2021-12-06\_1920x1080\_006.png)

Just click "Top up" and it will ask you to confirm a transfer (the screenshot show 0.2 ETH but on Gnosis chain, this would be 0.1 XDAI)

![](../.gitbook/assets/2021-12-06\_1920x1080\_008.png) ![](../.gitbook/assets/2021-12-06\_1920x1080\_007.png)

You ll have to wait a bit. The UI currently do not show progress.

Then you can now send fleets away and the "submit to agent-service" will be enabled.

You can always decide to disable it though if you prefers to perform the 2nd transactions manually

![](../.gitbook/assets/2021-12-06\_1920x1080\_009.png)

It is also possible to submit fleets to the agent-service after they have been sent. But this need to be done before the fleet reaches destination.

![](../.gitbook/assets/2021-12-06\_1920x1080\_054.png)

