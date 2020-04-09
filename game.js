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
                this.buyerSpeed = 70;
                this.totalEarnings = 0;
            };

            gameScene.preload = function preload() {
                this.load.image('background', 'assets/background-loaded.png');
                // this.load.spritesheet('gabe', 'assets/gabe.png', {frameWidth: 24, frameHeight: 24});
                this.load.spritesheet('kid1', 'assets/kids/kid-f-1.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer1', 'assets/buyers/buyer-f-2.png', {frameWidth: 32, frameHeight: 32});
                this.load.spritesheet('buyer2', 'assets/buyers/buyer-m-1.png', {frameWidth: 32, frameHeight: 32});
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
                // this.load.setBaseURL('http://labs.phaser.io');
                // this.load.image('sky', 'assets/skies/space3.png');
                // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
                // this.load.image('red', 'assets/particles/red.png');
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


                // this.buyer1.setCollideWorldBounds(true);

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

                // this.scoreText = this.add.text(16, 16, 'Total Earnings: 0', {
                //     fontSize: '32px', fill: '#000'
                // });

                this.earningsText = this.add.text(0, 0, 'Total Earnings($): 0', {
                    fontFamily: 'Courier',
                    fontSize: 28,
                    color: 'rgba(38, 76, 81, 1)',
                    backgroundColor: 'rgba(255, 178, 2, .7)'
                });


            };

            gameScene.update = function update() {
                this.walkPath(this.buyer1);

            };

            gameScene.walkPath = function () {
                // walk up y:190 is in front of stand, if he has not walked up
                if (!this.buyer1.walkedUp) {
                    this.walkForward(this.buyer1);
                    console.log("walking up");
                }
                // buyer.walkedUp = true at this point

                // Do transaction
                if (this.buyer1.walkedUp && !this.buyer1.boughtLemonade) {
                    this.doTransaction(this.buyer1);
                    console.log("buying");
                }
                // buyer.boughtLemonade = true at this point

                // Once he walked up, he can walk left to start leaving
                if (this.buyer1.walkedUp && this.buyer1.boughtLemonade && !this.buyer1.walkedLeft) {
                    this.walkLeft(this.buyer1);
                    console.log("walking left");
                }
                // buyer.walkedLeft = true at this point

                // Walk back and exit scene
                if (this.buyer1.walkedUp && this.buyer1.walkedLeft && this.buyer1.boughtLemonade && !this.buyer1.walkedBack) {
                    this.walkBack(this.buyer1);
                    console.log("walking back");
                }
            };

            // Buyer walking up
            gameScene.walkForward = function (buyer) {
                if (buyer.y >= this.frontStandY) {
                    buyer.anims.play('up', true);
                    buyer.setVelocityY(-this.buyerSpeed);
                }
                if (buyer.y <= this.frontStandY) {
                    buyer.setVelocityY(0);
                    buyer.anims.play('up');
                    buyer.walkedUp = true;
                }
            };

            // Buyer walking left
            gameScene.walkLeft = function (buyer) {
                if (buyer.x >= 190) {
                    buyer.anims.play('left', true);
                    buyer.setVelocityX(-this.buyerSpeed);
                }
                if (buyer.x <= 190) {
                    buyer.setVelocityX(0);
                    buyer.walkedLeft = true;
                }
            };
            // Buyer walking back
            gameScene.walkBack = function (buyer) {
                if (buyer.y <= 480) {
                    buyer.anims.play('down', true);
                    buyer.setVelocityY(this.buyerSpeed);
                }
                if (buyer.y >= 480) {
                    buyer.setVelocityY(0);
                    // remove sprite once exited scene
                    buyer.disableBody(true, true);
                    buyer.walkedBack = true;
                }
            };

            gameScene.doTransaction = function (buyer) {
                buyer.anims.play('up', false);

                // do thinking
                if (!buyer.doneDeciding) {
                    buyer.buyerEmotion = this.add.sprite(220, 165, 'deciding');
                    this.time.delayedCall(3000, function () {
                        buyer.doneDeciding = true;
                    }, [], this);
                }

                if (buyer.doneDeciding && !buyer.boughtLemonade) {
                    buyer.buyerEmotion.setTexture('lemon');
                    if (this.sellerEmotion === undefined) {
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
                        this.tween.play();
                    }

                    // if buyer has not bought a lemonade then wait until he purchases one
                    if (!buyer.boughtLemonade) {
                        // sold a lemonade
                        this.sellerEmotion.on('pointerdown', function (pointer) {
                            // stop the seller's emotion
                            this.sellerEmotion.setTexture('superhappy');
                            buyer.buyerEmotion.setTexture('wave');
                            // this.tween.restart();
                            this.time.delayedCall(3000, function () {
                                this.sellerEmotion.setTexture('peace');
                            }, [], this);
                            this.totalEarnings += 5.00;
                            this.earningsText.setText('Total Earnings($): ' + this.totalEarnings);
                            buyer.boughtLemonade = true;
                        }, this);
                    }


                }

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