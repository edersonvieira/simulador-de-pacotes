class Operations {
    list (name) {
        try {
            return JSON.parse(localStorage.getItem(name))
        } catch (error) {
            console.log(error)
            return []
        }
    }

    get (name, id) {
        try {
            const items = JSON.parse(localStorage.getItem(name))
            return items[id]
        } catch (error) {
            console.log(error)
            return {}
        }
    }

    create (name, data) {
        try {
            localStorage.setItem(name, JSON.stringify(data))
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    update (name, id, data) {
        try {
            const items = JSON.parse(localStorage.getItem(name))
            items[id] = data
            localStorage.setItem(name, JSON.stringify(items))
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    delete (name, id) {
        try {
            const items = JSON.parse(localStorage.getItem(name))
            delete items[id]
            localStorage.setItem(name, JSON.stringify(items))
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    remove (name) {
        try {
            localStorage.removeItem(name)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}