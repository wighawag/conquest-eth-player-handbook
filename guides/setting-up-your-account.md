# Setting up your account

{% hint style="info" %}
**Syncing and Accounts:** In order to provide a better user experience, conquest.eth has 2 backends used to save your private local data (encrypted locally) and your message inbox (Work in progress). These are optional services but make for a better experience.

Etherplay cannot read any data stored as they are encrypted locally. On top of that the data syncing service has client side protection which prevent even the remote server to delete or bring old data back.
{% endhint %}

When you start the game, conquest ask you to setup an account.

There are 2 signing process you ll have to go through. The first one setup a special private key that encode game data locally.&#x20;

### Local Data Private Key

![](../.gitbook/assets/2021-12-02\_1920x1080\_000.png)

This step let you choose if you want the private key to be remembered so that you do not need to sign this message every time you play, but note that you have to trust your computer / browser as the private key will be stored in clear in your local storage.&#x20;

{% hint style="info" %}
Note that this private key do not have any on-chain power. If it fall in the hand of someone malicious, that person would be able to delete your data from our remote server and introduce invalid one. That person would also be able to see your fleets.&#x20;

But you can always create a new one later. We do not make that easy currently though.
{% endhint %}

It also allow you to decide whether you want to make use of our syncing service that would allow you to use multiple devices and have your game data synced across. We recommend its use, so you can always check your game on any device.&#x20;

{% hint style="info" %}
Note that our syncing service has no access to your data. This is because your data is encrypted locally first. We also cannot affect your local data by deleting remote data thanks to our syncing algorithm that favour local data over remote one.
{% endhint %}

### Public Signing Key

The other signing message that you ll have to agree is to setup a public key for other to send you private message. This feature is not yet in place though and for now its only utility is for players to advertise a channel of their choice to be contacted (Discord for example). The message need to be signed only once.

![](../.gitbook/assets/2021-12-02\_1920x1080\_002.png)
