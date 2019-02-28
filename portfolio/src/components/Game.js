import React, { Component } from 'react';
import Phaser from 'phaser';
import Portfolio from '../assets/Portfolio.JPG';
import Ground from '../assets/ground.JPG';
import DudeSpriter from '../assets/dude.PNG';
import ParagraphGround from '../assets/paragraphGround.JPG';
import Ship from '../assets/ship.PNG';
import Marquee from '../assets/marquee.PNG';
import MarqueeInstructions from '../assets/marqueeInstructions.PNG';

export default class Game extends Component {

    componentDidMount() {
        let config = {
            type: Phaser.AUTO,
            width: 1925,
            height: 950,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 500 },
                    debug: false
                }
            },
            scene: {
                preload: preload,
                create: create,
                update: update
            }
        };
        

        this.game = new Phaser.Game(config);

        function preload ()
        {
            this.load.image('portfolio', Portfolio);
            this.load.image('ground', Ground);
            this.load.image('paragraphGround', ParagraphGround);
            this.load.image('ship', Ship);
            this.load.spritesheet('dude', DudeSpriter,  { frameWidth: 113, frameHeight: 110, });
            this.load.spritesheet('marquee', Marquee,  { frameWidth: 602, frameHeight: 280, });
            this.load.spritesheet('marqueeInstructions', MarqueeInstructions,  { frameWidth: 662, frameHeight: 360, });
        }
        
        
        function create ()
        {
            this.add.image(0, 0, 'portfolio').setOrigin(0, 0)
            // =============== PLATFORMS ===============//

            let platforms = this.physics.add.staticGroup();

            platforms.create(450, 397, 'ground').setScale(7.47, 1).refreshBody();
            platforms.create(960, 265, 'paragraphGround');

            // =============== SPRITES ===============//
            this.marquee = this.physics.add.sprite(1500, 175, 'marquee');
            this.marquee.body.setAllowGravity(false);

            this.marqueeInstructions = this.physics.add.sprite(400, 185, 'marqueeInstructions');
            this.marqueeInstructions.body.setAllowGravity(false);

            this.ship = this.physics.add.sprite(1100, 180, 'ship').setScale(.15);
            this.ship.setCollideWorldBounds(true)

            this.player = this.physics.add.sprite(100, 340, 'dude').setScale(.5)
            this.player.setBounce(0.15);
            this.player.setCollideWorldBounds(true)


            this.anims.create({
                key: 'left',
                frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
                frameRate: 7,
                repeat: -1
            });
            
            this.anims.create({
                key: 'turn',
                frames: [ { key: 'dude', frame: 4 } ],
                frameRate: 7
            });
            
            this.anims.create({
                key: 'right',
                frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
                frameRate: 7,
                repeat: -1
            });

            this.anims.create({
                key: 'marqueeAnimate',
                frames: this.anims.generateFrameNumbers('marquee', { start: 0, end: 3 }),
                frameRate: 2,
                repeat: -1
            });
            
            this.anims.create({
                key: 'marqueeInstructionsAnimate',
                frames: this.anims.generateFrameNumbers('marqueeInstructions', { start: 0, end: 3 }),
                frameRate: 2,
                repeat: -1
            });


            this.physics.add.collider(this.player, platforms);
            this.physics.add.collider(this.ship, platforms);

            this.cursors = this.input.keyboard.createCursorKeys();

            this.cameras.main.setBounds(0, 0);
            this.cameras.main.startFollow(this.player);
    }
        
        
        function update ()
        {   
            this.marquee.anims.play('marqueeAnimate', true);
            this.marqueeInstructions.anims.play('marqueeInstructionsAnimate', true);

            if (this.cursors.left.isDown && this.player.isCropped === false) {
                this.player.setVelocityX(-140);
                this.player.anims.play('left', true);
            
            } else if (this.cursors.right.isDown && this.player.isCropped === false) {
                this.player.setVelocityX(140);
                this.player.anims.play('right', true);

            } else if (this.player.isCropped === false) {
                this.player.setVelocityX(0);
                this.player.anims.play('turn');
            }
    
            if (this.cursors.up.isDown && this.player.body.touching.down && this.player.isCropped === false) {
                this.player.setVelocityY(-400);
            }

            if(this.cursors.space.isDown && (this.ship.x - this.player.x) > -50 && (this.ship.x - this.player.x) < 50 ) {
                this.player.isCropped = true;
            }

            if(this.player.isCropped === true) {
                if (this.cursors.left.isDown) {
                    this.ship.setVelocityX(-280)
                    this.ship.setRotation(-1.5708);
                    this.ship.setVelocityY(0);

                    this.player.setVelocityX(-280)
                    this.player.setVelocityY(0);
                    
                } else if (this.cursors.right.isDown) {
                    this.ship.setVelocityX(280);
                    this.ship.setRotation(1.5708);
                    this.ship.setVelocityY(0);

                    this.player.setVelocityX(280);
                    this.player.setVelocityY(0);
                 }
                

                if (this.cursors.up.isDown) {
                    this.ship.setVelocityY(-280);
                    this.player.setVelocityY(-280);

                } else if (this.cursors.down.isDown) {
                    this.ship.setVelocityY(280);
                    this.ship.setRotation(3.14159);

                    this.player.setVelocityY(280);
                } 
                
                if(!this.cursors.left.isDown && !this.cursors.right.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown) {
                    this.ship.setVelocityX(0)
                    this.ship.setVelocityY(0)
                    this.ship.setRotation(0)

                    this.player.setVelocityX(0);
                    this.player.setVelocityY(0);
                 }
            }

            if(this.cursors.shift.isDown && this.player.isCropped === true) {
                this.player.isCropped = false;
            }
        }


    }


    render() {
        if(this.props.checked === false && this.props.ended === true) {
            // this.game.renderer.destroy();
            // this.game.loop.stop();
            // this.game.canvas.remove();
        
            window.location.reload()
        }
        return (
            <div></div>
        )
    }
}