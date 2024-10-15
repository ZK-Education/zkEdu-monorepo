# ZK-Education

## Table of Contents

- [Project Overview](#ProjectOverview)
- [Why Blockchain?](#WhyBlockchain?)
- [Features](#Features)
- [Architecture](#Architecture)
- [Smart Contracts](#SmartContracts)
- [Setup and Installation](#SetupandInstallation])
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Roadmap](#Roadmap)
- [License](#License)

  
ZK-Education is an innovative education platform that leverages blockchain technology to revolutionize the certification and credentialing process. By utilizing on-chain NFT certificates and zero-knowledge proofs (zk technology), ZK-Education offers a secure, tamper-proof, and easily verifiable way to manage and issue educational certificates.

The platform currently operates on the Sepolia network and plans to integrate with the Scroll network, where zk technology will be fully utilized for enhanced privacy and security. Certificates are stored as personalized SVGs within NFTs, making them immutable and uniquely tied to each recipient.

## Key Features

• Blockchain-based Certification: All certificates are issued as NFTs on-chain, ensuring immutability and verifiability. <br>

• Zero-Knowledge Proofs: Zk technology enables credential verification without revealing sensitive data, enhancing privacy for users.<br>

• DTL Token Integration: Users purchase courses using DTL tokens and receive cashback upon successful completion, incentivizing continuous learning.<br>

• Personalized Certificates: Each certificate is stored as a unique SVG, personalized to the individual recipient.<br>

• Cross-Network Compatibility: Initially launched on the Sepolia network, with plans to fully migrate to the Scroll network to leverage zk capabilities.<br>


## Project Overview

ZK-Education aims to solve the problems of document forgery, fragmented data, and lack of verifiable credentials in traditional education systems. By issuing on-chain certificates and leveraging zk technology, the platform creates a globally verifiable, secure, and privacy-focused solution for educational certifications.

## Why Blockchain?

• Immutability: Certificates issued as NFTs cannot be altered or tampered with.<br>

• Transparency: All transactions and certificates are publicly verifiable on the blockchain.<br>

• Security: The use of zk technology ensures that user credentials can be verified without compromising sensitive data.<br>
 

## Features

• NFT Certificates: Educational certificates are issued as NFTs, stored on-chain, and are tamper-proof.<br>

• Zero-Knowledge Technology: Ensures that sensitive user data remains private while allowing credential verification.<br>

• DTL Token and Cashback: Students purchase courses with DTL tokens and receive a portion of their tokens back after completing courses, encouraging continued participation.<br>

• Cross-Platform Integration: Initially deployed on the Sepolia network, with plans to transition to the Scroll network for advanced zk-based functionality.

## Architecture

The ZK-Education platform consists of several smart contracts and integrations:

1. NFT Certificate Contract: Handles the issuance and management of certificates as NFTs.<br>

2. DTL Token Contract: Manages the DTL token economy, including token purchase and cashback incentives.<br>

3. zk Technology Integration: Leverages zk proofs to verify users’ educational credentials without exposing personal information.<br>


## Smart Contracts

• NftCertificate.sol: Manages the issuance of certificates as NFTs.<br>

• DTLToken.sol: Handles the purchase and cashback mechanism using DTL tokens.<br>

• zkedu.sol: The contract that ties together the NFT certificates and DTL tokens, while utilizing zk proofs for verification.<br>

Setup and Installation

To set up the ZK-Education platform locally, follow the steps below:


## Prerequisites

• Node.js (v14 or later) <br>
• Hardhat (for smart contract development)<br>
• Metamask (for interacting with the blockchain)<br>
• Git<br>


## Installation Steps

	1.	Clone the repository:

git clone https://github.com/ZK-Education/zkEdu-monorepo.git


	2.	Install dependencies:

npm install


	3.	Compile the smart contracts:

npx hardhat compile


	4.	Deploy the contracts:

npx hardhat run scripts/deploy.js --network sepolia



## Usage

Issuing a Certificate

1. Mint a new NFT certificate for a user by interacting with the NftCertificate.sol contract.<br>
2. Verify credentials using zk proofs to ensure privacy while confirming the validity of the certificate.<br>
3. Upon course completion, a cashback is automatically triggered, returning a portion of the user’s DTL tokens.

Verifying a Certificate

	•	The certificate’s validity can be verified on-chain by any user without exposing sensitive information.

Contributing

We welcome contributions from the community! If you would like to contribute to ZK-Education, please follow the guidelines below:

	1.	Fork the repository.
	2.	Create a new feature branch:

git checkout -b feature/your-feature-name


	3.	Make your changes and commit them:

git commit -m "Add your commit message"


	4.	Push your changes:

git push origin feature/your-feature-name


	5.	Open a pull request for review.

## Roadmap

• Phase 1: Launch the platform on ICP and integrate NFT certificates.<br>
• Phase 2: Migrate to the ICP network and fully implement zk technology.<br>
• Phase 3: Expand partnerships with educational institutions to adopt on-chain certification.<br>
• Phase 4: Implement cross-chain functionality for global interoperability.<br>

## License

This project is licensed under the MIT License - see the LICENSE file for details.

This README provides comprehensive documentation for the ZK-Education project. You can expand or adjust the content as needed to match future updates or changes in the project structure.
