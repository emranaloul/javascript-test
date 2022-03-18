const getData = async ()=>{
    return fetch('https://filltext.com/?rows=10&fname=emran&lastName=aloul&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true')
    .then(result => result.json())
    .then(data => {return data})
    
}

let renderData = async () => {
    let s = await getData()
    let categories = s.map(c => c.category)
     categories = categories.filter((c, i) => categories.indexOf(c)===i)
    
    let div = document.getElementById('container')
    let btnsContainer = document.createElement('div')
    div.appendChild(btnsContainer)
    btnsContainer.setAttribute('id','btnsContainer' )
    categories.forEach(value =>{
        let button = document.createElement('button')
        btnsContainer.appendChild(button)
        button.textContent = value
        button.value = value
        button.addEventListener('click', (e) =>{
            e.preventDefault()
            let renderedData = s.filter(value => value.category === e.target.value)
            let cards = document.getElementById('cards')
            cards.innerHTML = ''
            updateData(renderedData)
        })
    })
    let cards = document.createElement('div')
    div.appendChild(cards)
    cards.setAttribute('id', 'cards')
    s.forEach(val =>{
        let card = document.createElement('div')
        card.setAttribute('id', 'card')
        cards.appendChild(card)
        let avatar = document.createElement('strong')
        let firstName = document.createElement('h2')
        let lastName = document.createElement('h2')
        let category = document.createElement('span')
        card.appendChild(avatar)
        avatar.setAttribute('id', 'avatar')
        avatar.textContent = val.fname[0] +  val.lastName[0]
        card.appendChild(firstName)
        firstName.innerHTML = val.fname
        card.appendChild(lastName)
        lastName.innerHTML = val.lastName
        card.appendChild(category)
        category.innerHTML = val.category


    })



}

const updateData = (data) => {
    let cards = document.getElementById('cards')

    data.forEach(val =>{
        let card = document.createElement('div')

        card.setAttribute('id', 'card')
        cards.appendChild(card)
        let avatar = document.createElement('strong')
        let firstName = document.createElement('h2')
        let lastName = document.createElement('h2')
        let category = document.createElement('span')
        card.appendChild(avatar)
        avatar.setAttribute('id', 'avatar')
        avatar.textContent = val.fname[0] +  val.lastName[0]
        card.appendChild(firstName)
        firstName.innerHTML = val.fname
        card.appendChild(lastName)
        lastName.innerHTML = val.lastName
        card.appendChild(category)
        category.innerHTML = val.category


    })

}

renderData()
