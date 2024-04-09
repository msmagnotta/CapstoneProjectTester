// Import Game module
const Game = require('../modules/Game');

/**
 * Represents a Room for players to join and play games.
 */

class Room {

    /**
     * Create a Room.
     * @param {string} id - The ID of the room.
     */

    constructor(id) {
        this.roomId = id; // Room ID
        this.roomSize = 2; // Max number of players in room
        this.playersInRoom = []; // Array to store players in room
        this.game = null; // Game object
        this.status = 'inactive'; // Room status
        this.numPlayers = 0; // Number of players in room
    }

    /**
     * Check if the room is full.
     * @returns {boolean} True if the room is full, otherwise false.
     */
    isFull() {
        return this.playersInRoom.length === this.roomSize;
    }

    /**
     * Check if a game is in progress.
     * @returns {boolean} True if a game is in progress, otherwise false.
     */
    isGameGoing() {
        return this.game !== null;
    }

    /**
     * Start a new game.
     */
    startGame() {
        this.game = new Game();
    }

    /**
     * Check if all players in the room are ready.
     * @returns {boolean} True if all players are ready, otherwise false.
     */
    areAllReady() {
        if(this.numPlayers !== this.roomSize)
        return false
        return this.playersInRoom.every(({ player, status }) => {
            return status === 'Ready';
        });
    }

    /**
     * Check if a player is in the room.
     * @param {string} playerName - The name of the player to check.
     * @returns {boolean} True if the player is in the room, otherwise false.
     */
    hasPlayer(playerName) {
        let hasPlayerBool = false;
        this.playersInRoom.forEach(({ player, status }) => {
            if (player === playerName) {
                hasPlayerBool = true;
            }
        });
        return hasPlayerBool;
    }

    /**
     * Get the index of a player in the room.
     * @param {string} playerName - The name of the player.
     * @returns {number} The index of the player in the room, or -1 if not found.
     */
    indexOfPlayer(playerName) {
        let playerIndex = -1;
        this.playersInRoom.forEach(({ player, status }, index) => {
            if (player === playerName) {
                playerIndex = index;
            }
        });
        return playerIndex;
    }

    /**
     * Add a player to the room.
     * @param {Object} player - The player object to add.
     * @returns {boolean} True if the player was added successfully, otherwise false.
     */
    addPlayer(player) {
        if (this.isFull()) {
            console.log("Room full cannot add players");
            return false;
        }
        this.playersInRoom.push(player);
        this.numPlayers += 1;
        return true;
    }

    /**
     * Remove a player from the room.
     * @param {Object} player - The player object to remove.
     */
    removePlayer(player) {
        let index = this.playersInRoom.indexOf(player);
        this.playersInRoom.splice(index, 1);
    }

    /**
     * Clear the room (unused in current implementation).
     */
    clearRoom() {
        // TODO: implement
    }
}

// Export the Room class
module.exports = Room;
