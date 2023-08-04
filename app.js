function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const { createApp } = Vue;

createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
  computed: {
    monsterHealthBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBar() {
      return { width: this.playerHealth + "%" };
    },
    enableSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {},
}).mount("#game");
