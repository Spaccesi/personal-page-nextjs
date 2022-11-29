window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
    constructor(effect, x, y, color){
        this.effect = effect;
        this.x = this.originX = x;
        this.y = this.originY = y;
        this.size = 10;
        this.color = color;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 10;
        this.angle = 0;
        this.distance = 1;
        this.friction = 0.98;
        this.ease = 0.19;
    }
    update(){
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;
        if(this.distance < this.effect.mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx);
            this.vx += this.force * Math.cos(this.angle);
            this.vy += this.force * Math.sin(this.angle);
        }
        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        }
    }

    class Effect {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.image = document.getElementById('image');
            this.centerX = this.width / 2;
            this.centerY = this.height / 2;
            this.x = this.centerX - this.image.width / 2;
            this.y = this.centerY - this.image.height / 2;
            this.particles = [];
            this.gap = 9;
            this.mouse = {
                radius: 3000,
                x: 0,
                y: 0
            }
            window.addEventListener("mousemove", event => {
                this.mouse.x = event.x;
                this.mouse.y = event.y;
            });
            window.addEventListener("touchstart", event => {
                this.mouse.x = event.changedTouches[0].clientX;
                this.mouse.y = event.changedTouches[0].clientY;
            }, false);
            
            window.addEventListener("touchmove", event => {
                event.preventDefault();
                this.mouse.x = event.targetTouches[0].clientX;
                this.mouse.y = event.targetTouches[0].clientY;
            }, false);
            
            window.addEventListener("touchend", event => {
                event.preventDefault();
                this.mouse.x = 0;
                this.mouse.y = 0;
            }, false);
        }
        init(context){
            context.drawImage(this.image,this.x, this.y);
            var pixels = context.getImageData(0, 0, this.width, this.height).data;
            var index;
            for(var y = 0; y < this.height; y += this.gap) {
                for(var x = 0; x < this.width; x += this.gap) {
                    index = (y * this.width + x) * 4;
                    const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        const color = 'rgba(' + red + ',' + green + ',' + blue + ', 0.8)';

                    if(pixels[++index] > 0) {
                        this.particles.push(new Particle(this, x, y, color));
                    }
                }
            }
            context.clearRect(0, 0, this.width, this.height);
        }
        update(){
            for(var i = 0; i < this.particles.length; i++) {
                this.particles[i].update();
            }
        }
        render(context){
            context.clearRect(0, 0, this.width, this.height);
            for(var i = 0; i < this.particles.length; i++) {
                var p = this.particles[i];
                context.fillStyle = p.color;
                context.fillRect(p.x, p.y, p.size, p.size);
            }
        }
    }

    const effect = new Effect(canvas.width, canvas.height);
    effect.init(ctx);

    function animate() {
        effect.update();
        effect.render(ctx);
        requestAnimationFrame(animate);
    }
    animate();

    // var pointLights = [];
    // var pointLight = new THREE.PointLight( 216285, 3.1 );
	// pointLight.decay = 1;
	// pointLight.position.set( -2.37, -18.15, 20.48 );
	// scene.add( pointLight );

    // function animate() {
	
    //     requestAnimationFrame( animate );
    
        
    
    //       var time = Date.now() * 0.0008 ;
    //     pointLights[0].position.x = Math.sin( time * 0.3  ) * 15;
    //     pointLights[0].position.y = Math.sin( time * 0.5  ) * 10;
    //     pointLights[0].position.z = Math.cos( time * 0.4  ) * 10;
    
            
    //     pointLights[1].position.x = Math.sin( time * 0.6  ) * 10;
    //     pointLights[1].position.y = Math.cos( time * 0.7 ) * 10;
    //     pointLights[1].position.z = Math.sin( time * 0.3 ) * 15;
    
    //     pointLights[2].position.x = Math.cos( time * 0.5  ) * 15;
    //     pointLights[2].position.y = Math.cos( time * 0.6 ) * 10;
    //     pointLights[2].position.z = Math.sin( time * 0.8 ) * 10;
    
    //     pointLights[3].position.x = Math.sin( time * 0.3  ) * 10;
    //     pointLights[3].position.y = Math.cos( time * 0.5 ) * 15;
    //     pointLights[3].position.z = Math.cos( time * 0.7 ) * 10;
    
    //     pointLights[4].position.x = Math.sin( time * 0.7  ) * 15;
    //     pointLights[4].position.y = Math.sin( time * 0.3 ) * 20;
    //     pointLights[4].position.z = Math.cos( time * 0.2 ) * 10;
    
    //     pointLights[5].position.x = Math.sin( time * 0.5  ) * 20;
    //     pointLights[5].position.y = Math.cos( time * 0.8 ) * 10;
    //     pointLights[5].position.z = Math.sin( time * 0.5 ) * 15;
    
    //     pointLights[6].position.x = Math.sin( time * 0.5  ) * 10;
    //     pointLights[6].position.y = Math.cos( time * 0.8 ) * 10;
    //     pointLights[6].position.z = Math.cos( time * 0.7 ) * 15;
    
    //     pointLights[7].position.x = Math.sin( time * 0.3  ) * 10;
    //     pointLights[7].position.y = Math.cos( time * 0.5 ) * 15;
    //     pointLights[7].position.z = Math.sin( time * 0.2 ) * 10;
    
    //     pointLights[8].position.x = Math.sin( time * 0.8  ) * 15;
    //     pointLights[8].position.y = Math.cos( time * 0.3 ) * 10;
    //     pointLights[8].position.z = Math.cos( time * 0.3 ) * 10;
                    
    //     render();
    // }; 

});