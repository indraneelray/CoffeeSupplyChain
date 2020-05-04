truffle migrate --reset --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        6426520
   > block timestamp:     1588553213
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.449723137
   > gas used:            210237 (0x3353d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > block number:        6426522
   > block timestamp:     1588553215
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.446538667
   > gas used:            291084 (0x4710c)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00291084 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > block number:        6426523
   > block timestamp:     1588553216
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.443627947
   > gas used:            291072 (0x47100)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00291072 ETH


   Deploying 'RetailerRole'
   ------------------------
   > block number:        6426524
   > block timestamp:     1588553218
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.440495767
   > gas used:            313218 (0x4c782)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00313218 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > block number:        6426525
   > block timestamp:     1588553220
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.437363587
   > gas used:            313218 (0x4c782)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00313218 ETH


   Deploying 'SupplyChain'
   -----------------------
   > block number:        6426526
   > block timestamp:     1588553224
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.407778787
   > gas used:            2958480 (0x2d2490)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0295848 ETH

   -------------------------------------
   > Total cost:          0.04167072 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.04377309 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xad67cdc4422e9af8e48faa9be0eda69a6f2e75cacaf917d05b9584e2f7967fc9
   > Blocks: 0            Seconds: 4
   > contract address:    0x8F32C9747C4479251B10416eA3790B5cB3926041
   > block number:        6426520
   > block timestamp:     1588553232
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.449573137
   > gas used:            225237 (0x36fd5)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00225237 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00225237 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x42b754840cb6ff9568f6c356cabfeb67e6f61abfc7b080823dd425db866146e4
   > Blocks: 0            Seconds: 12
   > contract address:    0x06705aAD514aA69d53F27557E3CbEDf4aA880428
   > block number:        6426522
   > block timestamp:     1588553262
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.446088667
   > gas used:            306084 (0x4aba4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306084 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0xe8f3b99d21dcfa29d06d55263f700efeedb97379596b20bc29a78da44c986f13
   > Blocks: 0            Seconds: 12
   > contract address:    0x70f84309a02a8BCd73cd5b2B8c9BD7561f5B8974
   > block number:        6426523
   > block timestamp:     1588553277
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.443027947
   > gas used:            306072 (0x4ab98)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306072 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x067e0d4b5d4686374aa53780c5e8c82491e2fe94ad19fe6681a79117b81904c9
   > Blocks: 0            Seconds: 12
   > contract address:    0xc31487D88DA712Fe4f6Ee0bbE6A75a1Cb76297B0
   > block number:        6426524
   > block timestamp:     1588553292
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.439745767
   > gas used:            328218 (0x5021a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00328218 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x4019380d230c4b76d6967b1cc21a8c2b3264897e41f090420a24738e6e350037
   > Blocks: 0            Seconds: 12
   > contract address:    0xb332Dd03655BeDf0fa7B5Fe9C0a490Af0373Ef24
   > block number:        6426525
   > block timestamp:     1588553307
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.436463587
   > gas used:            328218 (0x5021a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00328218 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xbf063869b2b7e968285e0b7a0cf699c41c429ace9bf3c3ad7d80905f9e8bbc77
   > Blocks: 0            Seconds: 12
   > contract address:    0x2ba67cAdEA0Fee648dC3C01452a86fdB932a0DEd
   > block number:        6426526
   > block timestamp:     1588553322
   > account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   > balance:             10.405828787
   > gas used:            3063480 (0x2ebeb8)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0306348 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04332072 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.04557309 ETH


https://rinkeby.etherscan.io/address/0x18e4ee67c92a22f4cc0071aa7892bea158c38b4f
