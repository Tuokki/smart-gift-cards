# smart-gift-cards

Needs to be installed: Node.js, Meteor.js

Application holds data:
  - users
    * username (email)
    * password
    * smart-gift-cards ownership data (smart contract address)
  - gift-card validating rules (how to know which smart-contracts to accept within app)
  - later: gift-cards in market (can be created)

Application can (via blockchain):
  - transfer gift-card ownership
    * also to non registered users with email
  - create gift-cards (needs extra permissions)
  - execute gift-cards (buy transaction)
    * email recepiet to buyer (owner) and seller (creator)
  - execute gift-cards (show details, value atm)
  - show/verify ownership of gift-cards
  - destroy gift-cards

Other fuctionality:
   - Register
    * Add gift-cards to account (using contract address)
    * Automatic gift-card adding with url-parameters when recived gift-cards as non registered user
   - Login
