{
    $(document).ready(() => {
            let lemonsEl = $('#lemons');
            let sugarsEl = $('#sugars');
            let iceEl = $('#ice');

            console.log(lemonsEl[0].value);
            console.log(sugarsEl[0].value);
            console.log(iceEl[0].value);


            let gameScene = new Phaser.Scene('Game');


            gameScene.init = function init() {
                this.kidX = 200;
                this.kidY = 155;
                this.frontStandY = 200;
                this.buyerStartX = 220;
                this.buyerStartY = 480;
                // this.standBoundsX = 160;
                // this.standBoundsY = 170;
                this.buyerSpeed = 1.5;
                this.totalEarnings = 0;
                this.kids = [
                    {
                        key: 'kid1'
                    },
                    {
                        key: 'kid2'
                    },
                    {
                        key: 'kid3'
                    },
                    {
                        key: 'kid4'
                    },
                    {
                        key: 'kid5'
                    },
                    {
                        key: 'kid6'
                    },
                    {
                        key: 'kid7'
                    },
                    {
                        key: 'kid8'
                    }
                ];


                this.buyers = [
                    {
                        key: 'buyer1'
                    },
                    {
                        key: 'buyer2'
                    },
                    {
                        key: 'buyer3'
                    },
                    {
                        key: 'buyer4'
                    },
                    {
                        key: 'buyer5'
                    },
                    {
                        key: 'buyer6'
                    },
                    {
                        key: 'buyer7'
                    },
                    {
                        key: 'buyer8'
                    },
                    {
                        key: 'buyer9'
                    },
                    {
                        key: 'buyer10'
                    },
                    {
                        key: 'buyer11'
                    },
                    {
                        key: 'buyer12'
                    },
                    {
                        key: 'buyer13'
                    },
                    {
                        key: 'buyer14'
                    },
                    {
                        key: 'buyer15'
                    },
                    {
                        key: 'buyer16'
                    },
                    {
                        key: 'buyer17'
                    },
                    {
                        key: 'buyer18'
                    },
                    {
                        key: 'buyer19'
                    },
                    {
                        key: 'buyer20'
                    },
                    {
                        key: 'buyer21'
                    },
                    {
                        key: 'buyer22'
                    }
                ]
            };

            gameScene.preload = function preload() {
                // Background
                this.load.image('background', 'assets/background-loaded.png');
                // Kids
                this.load.spritesheet('kid1', 'assets/kids/kid-f-1.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('kid2', 'assets/kids/kid-f-2.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('kid3', 'assets/kids/kid-f-3.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('kid4', 'assets/kids/kid-f-4.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('kid5', 'assets/kids/kid-m-1.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('kid6', 'assets/kids/kid-m-2.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('kid7', 'assets/kids/kid-m-3.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('kid8', 'assets/kids/kid-m-4.png', {frameWidth: 32, frameHeight: 32});
                // Female Buyers
                this.load.spritesheet('buyer1', 'assets/buyers/buyer-f-1.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer2', 'assets/buyers/buyer-f-2.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer3', 'assets/buyers/buyer-f-3.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer4', 'assets/buyers/buyer-f-4.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer5', 'assets/buyers/buyer-f-5.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer6', 'assets/buyers/buyer-f-6.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer7', 'assets/buyers/buyer-f-7.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer8', 'assets/buyers/buyer-f-8.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer9', 'assets/buyers/buyer-f-9.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer10', 'assets/buyers/buyer-f-10.png', {frameWidth: 32, frameHeight: 32});
                // Male Buyers
                this.load.spritesheet('buyer11', 'assets/buyers/buyer-m-1.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer12', 'assets/buyers/buyer-m-2.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer13', 'assets/buyers/buyer-m-3.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer14', 'assets/buyers/buyer-m-4.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer15', 'assets/buyers/buyer-m-5.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer16', 'assets/buyers/buyer-m-6.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer17', 'assets/buyers/buyer-m-7.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer18', 'assets/buyers/buyer-m-8.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer19', 'assets/buyers/buyer-m-9.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer20', 'assets/buyers/buyer-m-10.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer21', 'assets/buyers/buyer-m-11.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer22', 'assets/buyers/buyer-m-12.png', {frameWidth: 32, frameHeight: 32});
                // Load emotions
                this.load.image('angry', 'assets/emotions/angry.png');
                this.load.image('blueberry', 'assets/emotions/blueberry.png');
                this.load.image('deciding', 'assets/emotions/deciding.png');
                this.load.image('lemon', 'assets/emotions/lemon.png');
                this.load.image('peace', 'assets/emotions/peace.png');
                this.load.image('point', 'assets/emotions/point.png');
                this.load.image('raspberry', 'assets/emotions/raspberry.png');
                this.load.image('strawberry', 'assets/emotions/strawberry.png');
                this.load.image('superhappy', 'assets/emotions/superhappy.png');
                this.load.image('wave', 'assets/emotions/wave.png');
                this.load.image('money', 'assets/emotions/money.png');
                this.load.image('drop', 'assets/emotions/drop.png');
            };

            gameScene.create = function create() {
                this.add.sprite(0, 0, 'background').setOrigin(0, 0);
                // this.add.sprite(210, 470, 'gabe');
                this.add.sprite(this.kidX, this.kidY, 'kid1');

                this.buyer1 = this.physics.add.sprite(this.buyerStartX, this.buyerStartY, 'buyer1');
                this.buyer2 = this.physics.add.sprite(190, 450, 'buyer2');
                this.buyer1.walkedUp = false;
                this.buyer1.walkedLeft = false;
                this.buyer1.didTransaction = false;
                this.buyer1.doneDeciding = false;

                this.anims.create({
                        key: 'down',
                        frames: this.anims.generateFrameNumbers('buyer1', {
                            start: 0,
                            end: 2
                        }),
                        frameRate: 10,
                        repeat: -1
                    }
                );

                this.anims.create({
                    key: 'left',
                    frames: this.anims.generateFrameNumbers('buyer1', {
                        start: 3,
                        end: 5
                    }),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({
                    key: 'right',
                    frames: this.anims.generateFrameNumbers('buyer1', {
                        start: 6,
                        end: 8
                    }),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({
                    key: 'up',
                    frames: this.anims.generateFrameNumbers('buyer1', {
                        start: 9,
                        end: 11
                    }),
                    frameRate: 10,
                    repeat: -1
                });

                this.earningsText = this.add.text(0, 0, 'Total Earnings($): 0', {
                    fontFamily: 'Courier',
                    fontSize: 28,
                    color: 'rgba(38, 76, 81, 1)',
                    backgroundColor: 'rgba(255, 178, 2, .7)'
                });

                this.buyerEmotion = this.add.sprite(220, 165, 'deciding');
                this.sellerEmotion = this.add.sprite(200, 120, 'money');
                this.sellerEmotion.setInteractive();
                this.tween = this.tweens.add({
                    targets: this.sellerEmotion,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    duration: 500,
                    paused: true,
                    loop: 10,
                    yoyo: true
                });
                this.buyerEmotion.alpha = 0;
                this.sellerEmotion.alpha = 0;
            };

            gameScene.update = function update() {
                this.walkPath(this.buyer1);
            };

            gameScene.walkPath = function (buyer) {
                // walk up y:190 is in front of stand, if he has not walked up
                if (!buyer.walkedUp) {
                    this.walkForward(buyer);
                    console.log("walking up");
                }
                // buyer.walkedUp = true at this point

                // Do transaction
                if (buyer.walkedUp && !buyer.boughtLemonade && !buyer.gotAngry) {
                    this.doTransaction(buyer);
                    console.log("buying");
                }
                // buyer.boughtLemonade = true at this point

                // Once he walked up, he can walk left to start leaving
                if (buyer.walkedUp && (buyer.boughtLemonade || buyer.gotAngry) && !buyer.walkedLeft) {
                    // buyer.time.delayedCall(2000, function() {
                        this.walkLeft(buyer);
                    //     console.log("walking left");
                    // }, [], this);
                }
                // buyer.walkedLeft = true at this point

                // Walk back and exit scene
                if (buyer.walkedUp && buyer.walkedLeft && (buyer.boughtLemonade || buyer.gotAngry) && !buyer.walkedBack) {
                    this.walkBack(buyer);
                    console.log("walking back");
                }
            };

            // Buyer walking up
            gameScene.walkForward = function (buyer) {
                if (buyer.y >= this.frontStandY) {
                    buyer.anims.play('up', true);
                    buyer.y -= this.buyerSpeed;
                }
                if (buyer.y <= this.frontStandY) {
                    buyer.anims.play('up');
                    buyer.walkedUp = true;
                }
            };

            // Buyer walking left
            gameScene.walkLeft = function (buyer) {
                if (buyer.x >= 190) {
                    this.buyerEmotion.x -= this.buyerSpeed;
                    buyer.anims.play('left', true);
                    buyer.x -= this.buyerSpeed;
                }
                if (buyer.x <= 190) {
                    buyer.walkedLeft = true;
                }
            };
            // Buyer walking back
            gameScene.walkBack = function (buyer) {
                if (buyer.y <= 480) {
                    this.buyerEmotion.y += this.buyerSpeed;
                    buyer.anims.play('down', true);
                    buyer.y += this.buyerSpeed;
                }
                if (buyer.y >= 480) {
                    // buyer.setVelocityY(0);
                    // remove sprite once exited scene
                    this.buyerEmotion.alpha = 0;
                    this.sellerEmotion.alpha = 0;
                    buyer.disableBody(true, true);
                    buyer.walkedBack = true;
                }
            };

            gameScene.doTransaction = function (buyer) {
                buyer.anims.play('up', false);

                // do thinking
                if (!buyer.doneDeciding) {
                    this.buyerEmotion.alpha = 1;
                    this.time.delayedCall(3000, function () {
                        buyer.doneDeciding = true;
                    }, [], this);
                    console.log("deciding");
                }

                if (buyer.doneDeciding && !buyer.boughtLemonade && !buyer.gotAngry) {
                    this.buyerEmotion.setTexture('lemon');
                    this.sellerEmotion.alpha = 1;
                    // if (this.sellerEmotion !== undefined) {
                    //
                        this.tween.play();
                    // }

                    // if buyer has not bought a lemonade then wait until he purchases one
                    if (!buyer.boughtLemonade && !buyer.gotAngry) {
                        // sold a lemonade
                        this.sellerEmotion.on('pointerdown', function (pointer) {
                            // stop the seller's emotion
                            this.sellerEmotion.setTexture('superhappy');
                            this.buyerEmotion.setTexture('wave');
                            // this.tween.restart();
                            this.time.delayedCall(2000, function () {
                                this.sellerEmotion.setTexture('peace');
                            }, [], this);
                            this.increaseEarnings(5);
                            buyer.boughtLemonade = true;
                        }, gameScene);

                        // if 10 seconds pass and user did not click the money button, then seller leaves angry
                        this.time.delayedCall(10000, function() {
                            if (!buyer.boughtLemonade) {
                                console.log("im angry");
                                this.sellerEmotion.setTexture('drop');
                                this.buyerEmotion.setTexture('angry');
                                buyer.gotAngry = true;
                            }
                            // else {
                            //     console.log("i'm good");
                            // }
                        }, [], gameScene);

                    }


                }

            };

            gameScene.increaseEarnings = function (earnings) {
                this.earningsText.setText('Total Earnings($): ' + (this.totalEarnings + earnings));
            };

            gameScene.doThinking = function (buyer) {

            };

            gameScene.doSelection = function (buyer) {

                // this.emotion = this.add.sprite(220, 165, 'lemon');
            };


            let config = {
                type: Phaser.AUTO,
                width: 600,
                height: 480,
                parent: 'lemonade-game',
                physics: {
                    default: 'arcade',
                    arcade: {
                        gravity: {},
                        debug: false
                    }
                },
                scene: gameScene
            };

            let game = new Phaser.Game(config);
        }
    )
}