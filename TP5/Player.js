class Player {
  constructor(name, sprite, position = { x: 0, y: 0 }) {
    this.name = name;
    this.level = 0;
    this.sprite = sprite;
    this.experience = 0;
    this.maxHealth = 100;
    this.currentHealth = 100;
    this.isAttacking = false;
    this.attackCooldown = 0;
    this.attackDamage = 10;
    this.position = position;
    this.currentSpeed = 0;
    this.maxSpeed = 5;
    this.currentOrientation = 0;
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


}

