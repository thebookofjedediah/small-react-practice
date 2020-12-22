const INITIAL_STATE = { face: "^_^" }

function faceChanger(state=INITIAL_STATE, action) {
    switch (action.type) {
        case 'ANGRY':
            return { ...state, face: "ノಠ_ಠノ" }
        case 'SAD':
            return { ...state, face: "(-_-)" }
        case 'GLASSES':
            return { ...state, face: "(⌐■_■)" }
    }
    return state;
}

const store = Redux.createStore(faceChanger);