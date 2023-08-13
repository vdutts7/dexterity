<div align="center">
    <img src="https://raw.githubusercontent.com/vdutts7/dump/main/assets/dexterity-logo.png " alt="Logo" width="80" height="80">
    <h1 align="center">
        Dexterity
    </h1>
    <p align="center"> 
        <i><b>Decentralized Cryptocurrency Exchange with MetaMask Authentication ⛓️🌎🦊</b></i>
        <br /> 
    </p>

[![Website][website]][website-url]
[![Github][github]][github-url]

 </div>

<br/>

## Table of Contents

<ol>
    <a href="#about">📝 About</a>
        <ul>
        </ul>
    <a href="#how-to-build">💻 How to build</a><br/>
    <a href="#next-steps">🚀 Next steps</a> <br/>
    <a href="#tools-used">🔧 Tools used</a>
        <ul>
        </ul>
    <a href="#contact">👤 Contact</a>
  </ol>

<br/>

## 📝About

Building towards a Decentralized Exchange (DEX) Web 3.0 dApp:

- Solidity, Next.js, and Sanity.io.
- Deployed to Ethereum mainnet via Alchemy endpoint
- Integrated a full MetaMask wallet authentication, providing secure access to the platform 🔥

Useful tool to view live crypto prices as well as trade/swap between currencies without going through a centralized platform (like Coinbase, Robinhood, or everyone's favorite-- FTX).

This was a learning project so it's broken in some areas. It's also not meant to be a revolutionary work of art, go to [Uniswap](https://uniswap.org/) for that. It was merely practice for me as a developer to get my hands dirty with Web3 Javascript packages when I first began learning Solidity from YouTube. It was also a big learning gap initially for me as I was not familiar with authentication from the server-side on the browser, which was made even more complicated due to the nature of cryptographic hashes and private/public keys.

<br/>

## 💻How to Build

1. **Smart Contract Development via Solidity, Hardhat:**

   - Developed Solidity smart contracts in `smart_contract/` to power the DEX
   - Main contract, `Transactions.sol`, handles transaction execution.
   - Used Solidity v0.8.4 for up-to-date standards.
   - Hardhat- used to streamline contract deployment and testing.
   - Automated contract deployment via `deploy.js`.

2. **Ethereum Interaction via Web3.js, Ether.js:**

   - Web3.js and Ether.js in `client/` for Ethereum interaction.
   - Web3.js connects app to Ethereum node for data reading and transactions.
   - Ether.js simplifies contract interaction and data querying.
   - `lib/Transactions.json` communicates with deployed contract.

3. **🔥 Wallet Authentication 🔥 via MetaMask:**

   - Integrated MetaMask in `client/` for secure user authentication.
   - Users access the platform with an Ethereum wallet
   - MetaMask does its magic to enables smooth and secure transactions.
   - Hardest part of project, very satisfying

4. **Content Management System (CMS) via Sanity.io:**

   - `studio/`- CMS via Sanity.io

5. **ETH Mainnet Interaction via Alchemy:**

   - Deployed "to the blockchain" i.e. the Ethereum mainnet (via Alchemy).
   - `Ethereum-Mainnet` badge in README signifies the connection.

6. **Styling and UI:**
   - Next.js frontend + Tailwind CSS for rapid UI development.

<br/><br/>

## 🚀Next Steps

### Contributions and Open-Source License

- Open-source project for learning and exploration.
- Encouraging community contributions! Considering social tokens backed by proof-of-work mechanism

### Cash App Integration?

- Cash App integration to speed up fiat to crypto onboarding
- Cash App already boasts large userbase of fiat defectors as many of those users lost trust / never gained the trust of the Big Banks, whch also repeteadly fail to adapt to mobile and web technologies
- CEO Jack Dorsey has been pushing the boundaries of the fiat regulation box for years now, mainly through its grey status as a bank / fintech app / securities territory via its Bitcoin wallet integration and cashback-automatic-invest feature which allows cashback users receive to automically route to their BTC wallet.

### Proof-of-Work?

- Adding social tokens to user wallets as work is done on the Dexterity network, allowing open source work to be incentivized and leads to a better platform for everyone
- Somewhere along these winding routes a DAO will spawn, still learning about that

## 🔧Tools Used

### Smart Contract Development

[![Solidity][solidity]][solidity-url]
[![Hardhat][hardhat]][hardhat-url]

### Ethereum Interaction

[![Web3.js][web3.js]][web3.js-url]
[![Ether.js][ether.js]][ether.js-url]
[![Ethereum-Mainnet][ethereum-mainnet]][ethereum-mainnet-url]

### Wallet Authentication

[![Metamask][metamask]][metamask-url]

### Blockchain Data Provider

[![Alchemy][alchemy]][alchemy-url]

### Content Management System (CMS)

[![Sanity.io][sanity.io]][sanity.io-url]

### Frontend and UI

[![Next][next]][next-url]
[![TailwindCSS][tailwindcss]][tailwindcss-url]
[![Vercel][vercel]][vercel-url]

## 👤Contact

[![Email][email]][email-url]
[![Twitter][twitter]][twitter-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[alchemy]: https://img.shields.io/badge/Alchemy-0072FF?style=for-the-badge&logo=alchemy&logoColor=white&color=0072FF
[alchemy-url]: https://alchemyapi.io/
[solidity]: https://img.shields.io/badge/Solidity-FFCA28?style=for-the-badge&logo=solidity&logoColor=white&color=2a2477
[solidity-url]: https://soliditylang.org/
[hardhat]: https://img.shields.io/badge/Hardhat-FFCA28?style=for-the-badge&logo=hardhat&logoColor=black&color=F0FF00
[hardhat-url]: https://hardhat.org/
[web3.js]: https://img.shields.io/badge/Web3.js-FFCA28?style=for-the-badge&logo=ethereum&logoColor=white&color=437eb4
[web3.js-url]: https://web3js.readthedocs.io/en/v1.7.3/
[ether.js]: https://img.shields.io/badge/Ether.js-FFCA28?style=for-the-badge&logo=ethereum&logoColor=white&color=28359a
[ether.js-url]: https://docs.ethers.org/v5/
[metamask]: https://img.shields.io/badge/🦊_Metamask-000000?style=for-the-badge&logo=metamask&logoColor=white&color=e68a3c
[metamask-url]: https://metamask.io/
[sanity.io]: https://img.shields.io/badge/Sanity.io-E26D5F?style=for-the-badge&logo=sanitydotio&logoColor=white&color=E26D5F&labelColor=000000
[sanity.io-url]: https://www.sanity.io/
[ethereum-mainnet]: https://img.shields.io/badge/Ethereum_Mainnet-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white&color=3C3C3D
[ethereum-mainnet-url]: https://ethereum.org/en/
[next]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=skyblue&color=0A192F
[tailwindcss-url]: https://tailwindcss.com/
[vercel]: https://img.shields.io/badge/Vercel-FFFFFF?style=for-the-badge&logo=Vercel&logoColor=white&color=black
[vercel-url]: https://Vercel.com/
[website]: https://img.shields.io/badge/🔗Website-7f18ff?style=for-the-badge
[website-url]: https://d3xterity.vercel.app/
[github]: https://img.shields.io/badge/💻Github-000000?style=for-the-badge
[github-url]: https://github.com/vdutts7/cs186-ai-chat
[email]: https://img.shields.io/badge/me@vdutts7.com-FFCA28?style=for-the-badge&logo=Gmail&logoColor=00bbff&color=black
[email-url]: #
[twitter]: https://img.shields.io/badge/Twitter-FFCA28?style=for-the-badge&logo=Twitter&logoColor=00bbff&color=black
[twitter-url]: https://twitter.com/vdutts7/
