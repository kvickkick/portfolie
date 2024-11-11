// storage.js
const storage = {
    usernames: {},
    save(username, password) {
        this.usernames[username] = password;
        localStorage.setItem('usernames', JSON.stringify(this.usernames));
    },
    load() {
        this.usernames = JSON.parse(localStorage.getItem('usernames') || '{}');
    },
    check(username, password) {
        return this.usernames[username] === password;
    }
};

// Load existing users into the usernames object when the page loads
storage.load();