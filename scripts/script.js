'use strict';

const row = document.querySelector('.row');

const ourTeam = [
    {
        name: 'Wayne Bernett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }

]


for (let i = 0; i < ourTeam.length; i++) {

    //printing in console.log name role and image of every member
    console.log(`${ourTeam[i].name}, ${ourTeam[i].role}, ${ourTeam[i].image}`)

    //creating a card element for each member (6 cards)
    const card = document.createElement('div');
    card.classList.add('card');
    row.append(card);

    //creating a h2 element for each member and injecting the name in each h2
    const memberName = document.createElement('h2');
    memberName.innerText += ourTeam[i].name;
    card.append(memberName);

    //creating a p element for each member and injecting the role in each p
    const memberRole = document.createElement('p');
    memberRole.innerText += ourTeam[i].role;
    card.append(memberRole);

    //creating a p element for each member and injecting the role in each p
    const memberPhoto = document.createElement('p');
    memberPhoto.innerText += ourTeam[i].image;
    card.append(memberPhoto);


}
