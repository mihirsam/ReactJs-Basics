const nums = [1, 2, 3, 4, 5]
const doubled = nums.map(function(num) {
    return num * 2
})
console.log(doubled)
const filters = nums.filter(function(num) {
    return num > 2
})
console.log(filters)

const JokesData = [
    {
        id: 1,
        question: "Are you a magician?",
        punchline: "Because whenever I look at you, everyone else disappears!"
    },
    {
        id: 2,
        question: "Are you a camera?",
        punchline: "Because every time I look at you, I smile."
    },
    {
        id: 3,
        punchline: "I'm not a photographer, but I can picture me and you together."
    },
    {
        id: 4,
        question: "Do you play soccer?",
        punchline: "Because you're a keeper!"
    }
]

export default JokesData