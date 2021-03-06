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
                }
            ],
            theme: 'light',
            activeIndex: 0,
            newMessage: "",
            currentDate: "",
            searchChat: "",
            menuOpen: false,
            infoOpen: false,
            toggleIndex: -1,
        },
        methods: {
            //funzione per recuperare una parte di nome delle immagini degli avatar
            goToImg: function(newIndex){
                let img = this.contacts[newIndex].avatar;
                return "img/avatar" + img + ".jpg";
            },
            //funzione per selezionare un contatto
            classActive: function (newIndex) {
                this.activeIndex = newIndex;
            },
            //funzione per recuperare l'ultimo messaggio
            lastMessage: function(newIndex){
                //console.log(newIndex);
                let lastMess = this.contacts[newIndex].messages.length - 1;
                if(lastMess == -1){
                    return "messaggi cancellati";
                } 
                //console.log(this.contacts[newIndex].messages[lunghezza].text);
                return this.contacts[newIndex].messages[lastMess].text.slice(0, 24) + `...`;
            },
            //funzione per recuperare l'ultima data
            lastDateMessage: function(newIndex) {
                //console.log(newIndex);
                let lastDate = this.contacts[newIndex].messages.length - 1;
                //console.log(lunghezza);
                if(lastDate == -1){
                    return "Nessun accesso oggi";
                } 
                return this.contacts[newIndex].messages[lastDate].date;
            },
            //funzione per inviare un messaggio
            //setTimeout per ricevere una riposta random dopo un tot di tempo
            addNewMess: function(newIndex){ 
                //console.log("ho cliccato");
                //console.log(this.contacts[newIndex].messages);
                //var d= new Date();
                this.currentDate = dayjs().format('DD/MM/YYYY HH:mm:ss');

                this.contacts[newIndex].messages.push({
                    date: this.currentDate,
                    text: this.newMessage,
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
                this.newMessage = ""
            },
            //condizione per cambiare tema del colore
            toggle: function () {
                switch (this.theme) {
                  case 'light':
                    this.theme = 'dark';
                    break;
                  case 'dark':
                    this.theme = 'light';
                    break;
                  default:
                }
            },
            //funzione per spostare la visualizzazione in basso all'ultimo messaggio inviato
            scrollToEnd: function() {    	
                let container = document.getElementById("container-messages");
                //console.log(contenitore);
                let scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
            },
              //funzione ricerca nomi
            searchName: function() {
            this.contacts.forEach(
                (element) => {
                    //console.log(element);
                    //console.log(element.name.toLowerCase().startsWith(this.searchChat.toLowerCase()));
                    if(element.name.toLowerCase().startsWith(this.searchChat.toLowerCase()) == true){
                        element.visible = true;
                    }else {
                        element.visible = false;
                    }
                });
            },
            //funzione per cancellare un messaggio
            deleteMessage: function(newIndex){
                //console.log("cliccato");
                //console.log(this.activeIndex);
                this.contacts[this.activeIndex].messages.splice(newIndex, 1);
            },
            infoMessage: function(){
                //console.log("ho cliccato");
                this.infoOpen = !this.infoOpen;
            },
            infoMessageText: function(){
                if (this.toggleIndex !== -1) {
                    const text = this.contacts[this.activeIndex].messages[this.toggleIndex].text;
                    return text;
                } else {
                    return "";
                }
               //console.log(this.contacts[this.activeIndex].messages[newIndex].text);
            },
            infoMessageDate: function(){
                console.log(this.toggleIndex);
                if (this.toggleIndex !== -1) {
                    const date = this.contacts[this.activeIndex].messages[this.toggleIndex].date;
                    return date;
                } else {
                    return "";
                }
            }
        },
        updated() {
            this.scrollToEnd();
        },
    }
);

/* Milestone 1:
Replica della grafica (immagine in allegato) con la possibilit?? di avere messaggi scritti dall???utente (verdi) e dall???interlocutore (bianco) assegnando due classi CSS diverse;
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto, ricavandoli dall'array contacts qui allegato */

/* Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all'interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato */

/* Milestone 3
Aggiunta di un messaggio: l???utente scrive un testo nella parte bassa e digitando ???enter??? il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall???interlocutore: ad ogni inserimento di un messaggio, l???utente ricever?? un ???ok??? come risposta, che apparir?? dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell???input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo ???mar??? rimangono solo Marco e Martina) */

/* Milestone 5: 
clicco sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizza ora e ultimo messaggio inviato/ricevuto nella lista dei contatti */