class Player {
  constructor(name, sprite, position = { x: 0, y: 0 }) {
    this.name = name;

    // Stats
    this.level = 0;
    this.experience = 0;
    this.maxHealth = 100;
    this.currentHealth = this.maxHealth;

    // Position / movement
    this.position = { ...position };
    this.currentSpeed = 0;
    this.maxSpeed = 5;
    this.currentOrientation = 0; // 0-3

    // Combat
    this.attackDamage = 10;
    this.attackCooldown = 0;

    // Sprite data
    this.sprite = sprite;

    // State flags
    this.isWalking = false;
    this.isAttacking = false;
    this.isDying = false;

    // Animation indexes
    this.walkFrame = 0;
    this.attackFrame = 0;
    this.deathFrame = 0;

    // Timing
    this.animationTick = 0;
    this.animationSpeed = 6;

    // Current frame (sheet coordinates)
    this.currentFrame = {
      x: 0,
      y: 0,
    };
  }

  update(serverInfo) {
    this.position = serverInfo.position;
    this.currentHealth = serverInfo.health;
    this.level = serverInfo.level;
    this.experience = serverInfo.experience;
    this.isAttacking = serverInfo.isAttacking;
    this.attackCooldown = serverInfo.attackCooldown;
    this.currentSpeed = serverInfo.currentSpeed;
    this.currentOrientation = serverInfo.currentOrientation;
  }

  animate() {
    if (++this.animationTick % this.animationSpeed !== 0) return;

    // Death (bloquant)
    if (this.isDying) {
      const row = this.sprite.death.row;
      this.currentFrame.x = this.deathFrame;
      this.currentFrame.y = row;

      if (this.deathFrame < this.sprite.death.frames - 1) {
        this.deathFrame++;
      }

      return;
    }

    // Attack (one-shot)
    if (this.isAttacking) {
      const row = this.sprite.attack.startRow + this.currentOrientation;

      this.currentFrame.x = this.attackFrame;
      this.currentFrame.y = row;

      this.attackFrame++;

      if (this.attackFrame >= this.sprite.attack.frames) {
        this.attackFrame = 0;
        this.isAttacking = false;
      }

      return;
    }

    // Walk / Idle
    const row = this.sprite.walk.startRow + this.currentOrientation;

    this.currentFrame.x = this.walkFrame;
    this.currentFrame.y = row;

    if (this.isWalking && this.currentSpeed > 0) {
      this.walkFrame = (this.walkFrame + 1) % this.sprite.walk.frames;
    } else {
      this.walkFrame = 0; // idle = first frame
    }
  }
}


const player = new Player("Hero", "characterSprite.png");

console.log(player);
