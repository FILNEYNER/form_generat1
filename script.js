//form_test_1
async function form_test_1(){

    const form_test_1 = await fetch('./data/form-test-1.json')
    const data = await form_test_1.json()
    const title = document.createElement('h2')

    title.textContent = data.title
    document.getElementById('title').append(title)

    data.fields.forEach(item => {
        const label = document.createElement('input');
        if(item.attrs.type === 'text'){
            for (const [key, value] of Object.entries(item.attrs)) {
                label.setAttribute(key, value)
                label.setAttribute('placeholder',item.label)
                document.getElementById('content').append(label)
            }
        }
    });

    data.buttons.forEach(item=>{
        const button = document.createElement('button')
        button.textContent = item
        document.getElementById('btn').append(button)
    })
}
form_test_1().then(console.log)

//form_test_2
async function form_test_2() {
    const form = await fetch('./data/form-test-2.json')
    const data = await form.json()
    const title = document.createElement('h2')

    title.textContent = data.title
    document.getElementById('title2').append(title)

    const description = document.createElement('p')

    description.textContent = data.description
    document.getElementById('descrip').append(description)

    data.fields.forEach(item => {
        if(item.attrs.type === 'text'){
            const label = document.createElement('input');
            for (const [key, value] of Object.entries(item.attrs)) {
                label.setAttribute(key, value)
                label.setAttribute('placeholder',item.label)
                document.getElementById('content2').append(label)
            }
        }
        else if(item.attrs.type === 'wrapper'){
            item.attrs.variants.map((item,key) =>{
                const wrapper = document.createElement('input')
                const label = document.createElement('label')
                wrapper.setAttribute("type","wrapper")
                wrapper.setAttribute('id',key)
                label.setAttribute('for',key)
                label.textContent = item.label
                document.getElementById('what').append(label)
                document.getElementById('what').append(wrapper)

            })
        }
        else if(item.attrs.type === 'textarea'){
            const textarea = document.createElement('textarea');
            for (const [key, value] of Object.entries(item.attrs)) {
                textarea.setAttribute(key, value)
                textarea.setAttribute('placeholder',item.label)
                document.getElementById('textarea').append(textarea)
            }
        }
    });

    data.buttons.forEach(item=>{
        const button = document.createElement('button')
        button.textContent = item
        document.getElementById('btn2').append(button)
    })
}
form_test_2().then(console.log)

//form_test_3
async function form_test_3(){
    const form = await fetch('./data/form-test-3.json')
    const data = await form.json()
    const title = document.createElement('h2')

    title.textContent = data.title
    document.getElementById('title3').append(title)

    const description = document.createElement('p')

    description.textContent = data.description
    document.getElementById('descrip2').append(description)

    data.fields.forEach(item => {
        if(item.attrs.type === 'select'){
            let select = document.createElement('select')
            item.attrs.variants.map((item,key) =>{
                let options = document.createElement('option')
                options.setAttribute('value',item.value)
                options.textContent = item.label
                select.appendChild(options)
                document.getElementById('Who').append(select)
            })
        }

        else if(item.attrs.type === 'textarea'){
            const textarea = document.createElement('textarea');
            for (const [key, value] of Object.entries(item.attrs)) {
                textarea.setAttribute(key, value)
                textarea.setAttribute('placeholder',item.label)
                document.getElementById('textarea1').append(textarea)
            }
        }

        else if(item.attrs.type === 'checkbox'){
            item.attrs.variants.map((item,key) =>{
                const wrapper = document.createElement('input')
                const label = document.createElement('label')
                wrapper.setAttribute("type","checkbox")
                wrapper.setAttribute('id',key)
                label.setAttribute('for',key)
                label.textContent = item.label
                document.getElementById('check').append(label)
                document.getElementById('check').append(wrapper)

            })
        }
    });

    data.buttons.forEach(item=>{
        const button = document.createElement('button')
        button.textContent = item
        document.getElementById('btn3').append(button)
    })
}
form_test_3().then(console.log)