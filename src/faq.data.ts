export const faqData = [
  {
    question: "What is ZeroLedger?",
    answer:
      "ZeroLedger is a next-generation payment system that provides programmable, trustless zk-based transfers with strong confidentiality and flexible compliance. It uses zero-knowledge proofs to ensure transaction privacy while maintaining regulatory compliance.",
  },
  {
    question: "How does privacy work in ZeroLedger?",
    answer:
      "ZeroLedger uses zk-SNARKs (zero-knowledge proofs) to hide transaction amounts while maintaining cryptographic security. Your transaction details are encrypted and only you can see your private balance, while the blockchain only stores proof that the transaction is valid.",
  },
  {
    question: "What networks does ZeroLedger support?",
    answer:
      "Currently, ZeroLedger operates on Optimism Sepolia testnet. The system is designed to be network-agnostic and can be deployed on other EVM-compatible networks in the future.",
  },
  {
    question: "How do I get started with ZeroLedger?",
    answer:
      "To get started, connect your wallet (MetaMask, Coinbase Wallet, or other supported wallets), set up a password for your view account, and authorize the connection. You can then deposit funds, make private transfers, and withdraw when needed.",
  },
  {
    question: "What is a view account?",
    answer:
      "A view account is a special account that allows you to decrypt and view your private transaction history. It's created during registration and requires your password to access. This ensures only you can see your private balance and transaction details.",
  },
  {
    question: "How fast are transactions?",
    answer:
      "ZeroLedger generates zk-proofs on the client side within 1-2 seconds, making transactions very fast. The actual blockchain confirmation depends on the network you're using, but the proof generation is optimized for speed.",
  },
  {
    question: "What tokens can I use?",
    answer:
      "Currently, ZeroLedger supports USD tokens on the Optimism Sepolia testnet. The system is designed to be token-agnostic and can support additional tokens in the future.",
  },
  {
    question: "Is ZeroLedger secure?",
    answer:
      "Yes, ZeroLedger uses state-of-the-art cryptography including zk-SNARKs for privacy and security. Your private keys remain in your wallet, and the system uses zero-knowledge proofs to ensure transaction validity without revealing sensitive information.",
  },
  {
    question: "Can I use ZeroLedger on mobile?",
    answer:
      "Yes, ZeroLedger is fully responsive and works on mobile devices. You can connect mobile wallets like MetaMask mobile or use WalletConnect to interact with the application.",
  },
  {
    question: "How do deposits and withdrawals work?",
    answer:
      "Deposits convert your public tokens into private tokens using zk-proofs. Withdrawals convert private tokens back to public tokens. Both processes use meta-transactions to handle gas fees efficiently and provide a seamless user experience.",
  },
  {
    question: "What are meta-transactions?",
    answer:
      "Meta-transactions allow you to pay for gas fees using tokens instead of the native network token. This makes it easier to use ZeroLedger without needing to manage multiple token types for gas payments.",
  },
  {
    question: "How do I get test tokens?",
    answer:
      "You can use the built-in faucet feature to get test USD tokens. Simply click the 'Faucet' button in the menu tab, and you'll receive a random amount of test tokens to try out the system.",
  },
];
