var app = new Vue(
    {
        el: "#root",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                    random: [
                        {
                            date: "",
                            text: "Non sei simpatico e non fai ridere nessuno",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Non credo di aver capito",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Ah ah ah",
                            status: "received"
                        }, 
                        {
                            date: "",
                            text: "Eccoci, rientriamo",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Proviamo",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Stai giocando a Guitar Hero?",
                            status: "received"
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },     
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Enrico',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Andiamo in montagna?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Siiii!!!!!!!!!!!!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Valentina',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Edoardo',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alberto',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                }
            ],
            tema: 'light',
            activeIndex: 0,
            nuovoMessaggio: "",
            dataCorrente: ""
        },
        methods: {
            //funzione per recuperare una parte di nuome delle immagini degli avatar
            goToImg: function(newIndex){
                let img = this.contacts[newIndex].avatar;
                return "img/avatar" + img + ".jpg";
            },
            //funzione per selezionare un contatto
            classeActive: function (newIndex) {
                this.activeIndex = newIndex;
            },
            //funzione per recuperare l'ultimo messaggio
            lastMessage: function(newIndex){
                //console.log(newIndex);
                let lunghezza = this.contacts[newIndex].messages.length - 1;
                //console.log(this.contacts[newIndex].messages[lunghezza].text);
                return this.contacts[newIndex].messages[lunghezza].text.slice(0, 24) + `...`;
            },
            //funzione per recuperare l'ultima data
            lastDataMessage: function(newIndex) {
                //console.log(newIndex);
                let lunghezza = this.contacts[newIndex].messages.length - 1;
                return this.contacts[newIndex].messages[lunghezza].date;
            },
            //funzione per inviare un messaggio
            //setTimeout per ricevere una riposta random 
            addNewMess: function(newIndex){ 
                console.log("ho cliccato");
                //console.log(this.contacts[newIndex].messages);
                //var d= new Date();
                this.dataCorrente = dayjs().format('DD/MM/YYYY HH:mm:ss');

                this.contacts[newIndex].messages.push({
                    date: this.dataCorrente,
                    text: this.nuovoMessaggio,
                    status: 'sent'
                }),
                
                setTimeout(() => {
                    const randomAnswer = this.contacts[this.activeIndex].random[Math.floor((Math.random() * (5 - 0 + 1)) + 0)].text;

                    this.contacts[this.activeIndex].messages.push({
                        date: dayjs().format('DD/MM/YY HH:mm:ss'),
                        text: randomAnswer,
                        status: 'received'
                    })
                }, 3500);

                this.nuovoMessaggio = ""
            },
            //funzione per cambiare tema del colore
            toggle() {
                switch (this.tema) {
                  case 'light':
                    this.tema = 'dark';
                    break;
                  case 'dark':
                    this.tema = 'light';
                    break;
                  default:
                }
              }
        }
    }
);

/* Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto, ricavandoli dall'array contacts qui allegato */

/* Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all'interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato */