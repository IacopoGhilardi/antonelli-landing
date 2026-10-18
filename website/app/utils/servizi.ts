export type Servizio = {
  slug: string
  icon: string
  color: 'primary' | 'secondary'
  title: string
  description: string
  /** Approfondimento mostrato nella pagina dedicata */
  dettaglio: string
  punti: string[]
  /** Mostrato in evidenza in homepage */
  inHome: boolean
}

export const servizi: Servizio[] = [
  {
    slug: 'valutazione-ompt',
    icon: 'i-heroicons-clipboard-document-check',
    color: 'primary',
    title: 'Valutazione muscoloscheletrica OMPT',
    description:
      'Esame clinico approfondito per individuare l’origine del disturbo e costruire il percorso più adatto.',
    dettaglio:
      'Il primo incontro è dedicato all’ascolto della tua storia clinica e a un esame fisico strutturato secondo il modello OMPT (Orthopaedic Manipulative Physical Therapy). Test articolari, muscolari e neurodinamici permettono di formulare un ragionamento clinico basato sulle evidenze, definire obiettivi realistici e condividere con te tempi e strategie del trattamento.',
    punti: [
      'Anamnesi e ragionamento clinico strutturato',
      'Test articolari, muscolari e neurodinamici',
      'Obiettivi condivisi e piano di trattamento su misura',
      'Educazione del paziente e gestione delle aspettative'
    ],
    inHome: true
  },
  {
    slug: 'terapia-manuale',
    icon: 'i-heroicons-hand-raised',
    color: 'secondary',
    title: 'Terapia manuale',
    description:
      'Mobilizzazioni, manipolazioni e tecniche sui tessuti molli per ridurre il dolore e recuperare mobilità.',
    dettaglio:
      'La terapia manuale agisce su articolazioni e tessuti molli per ridurre il dolore, restituire ampiezza di movimento e preparare il corpo all’esercizio terapeutico. Le tecniche vengono scelte e dosate in base alla fase del disturbo ed è sempre integrata con un programma attivo: il lavoro manuale apre la finestra, l’esercizio consolida il risultato.',
    punti: [
      'Mobilizzazioni e manipolazioni articolari',
      'Tecniche sui tessuti molli e trigger point',
      'Trattamento di cervicalgia, lombalgia e cefalea cervicogenica',
      'Sempre abbinata a esercizio terapeutico'
    ],
    inHome: true
  },
  {
    slug: 'esercizio-terapeutico',
    icon: 'i-heroicons-arrow-trending-up',
    color: 'primary',
    title: 'Esercizio terapeutico',
    description:
      'Programmi di rinforzo e controllo motorio progressivi, in studio e da proseguire a casa.',
    dettaglio:
      'L’esercizio terapeutico è lo strumento con la maggiore evidenza scientifica nella gestione dei disturbi muscoloscheletrici. Costruiamo insieme un programma progressivo di mobilità, forza e controllo motorio, calibrato sul tuo livello di partenza e sui tuoi obiettivi, con una scheda chiara da portare avanti in autonomia tra una seduta e l’altra.',
    punti: [
      'Progressioni di carico monitorate seduta dopo seduta',
      'Controllo motorio e stabilità articolare',
      'Scheda personalizzata per il lavoro a casa',
      'Prevenzione delle recidive'
    ],
    inHome: true
  },
  {
    slug: 'riabilitazione-post-chirurgica',
    icon: 'i-heroicons-sparkles',
    color: 'secondary',
    title: 'Riabilitazione post-chirurgica',
    description:
      'Percorsi guidati dopo interventi ortopedici, nel rispetto dei tempi biologici dei tessuti.',
    dettaglio:
      'Dopo un intervento di protesi, una ricostruzione del legamento crociato, una riparazione della cuffia dei rotatori o una stabilizzazione articolare, il recupero segue tappe precise. Il percorso rispetta i tempi di guarigione dei tessuti e i protocolli del chirurgo, accompagnandoti dal controllo del dolore e del gonfiore fino al ritorno completo alle attività quotidiane, lavorative e sportive.',
    punti: [
      'Gestione di dolore, gonfiore e recupero dell’articolarità',
      'Recupero di forza e cammino',
      'Protocolli concordati con il percorso chirurgico',
      'Ritorno graduale alle attività quotidiane e sportive'
    ],
    inHome: true
  },
  {
    slug: 'fisioterapia-sportiva',
    icon: 'i-heroicons-bolt',
    color: 'primary',
    title: 'Fisioterapia sportiva',
    description:
      'Trattamento degli infortuni e criteri oggettivi per un return to sport in sicurezza.',
    dettaglio:
      'Distorsioni di caviglia, lesioni muscolari, tendinopatie, instabilità di spalla e dolore femoro-rotuleo: ogni infortunio sportivo ha bisogno di un percorso specifico per lo sport praticato. Il ritorno in campo non si decide sul calendario ma su criteri oggettivi di forza, controllo e gesto atletico, per ridurre il rischio di ricaduta.',
    punti: [
      'Lesioni muscolari, tendinopatie e distorsioni',
      'Lavoro sul gesto atletico specifico',
      'Return to sport basato su criteri oggettivi',
      'Programmi di prevenzione degli infortuni'
    ],
    inHome: false
  },
  {
    slug: 'terapia-fisica-strumentale',
    icon: 'i-heroicons-cpu-chip',
    color: 'secondary',
    title: 'Terapia fisica strumentale',
    description:
      'Mezzi fisici ed elettromedicali come supporto al percorso riabilitativo attivo.',
    dettaglio:
      'Tecarterapia, laser, ultrasuoni ed elettrostimolazione possono aiutare nel controllo del dolore e nel recupero funzionale, soprattutto nelle fasi iniziali. Sono strumenti di supporto, mai sostitutivi: vengono impiegati solo quando utili e sempre all’interno di un percorso attivo.',
    punti: [
      'Supporto nel controllo del dolore acuto',
      'Impiego mirato e per il tempo strettamente necessario',
      'Sempre integrata con terapia manuale ed esercizio'
    ],
    inHome: false
  },
  {
    slug: 'fisioterapia-domiciliare',
    icon: 'i-heroicons-home-modern',
    color: 'primary',
    title: 'Fisioterapia domiciliare',
    description:
      'Trattamenti a casa per chi ha difficoltà a spostarsi o preferisce il comfort del proprio ambiente.',
    dettaglio:
      'Per chi ha una ridotta autonomia negli spostamenti, nel post-operatorio immediato o per la persona anziana, il trattamento si svolge direttamente a domicilio. L’ambiente di casa diventa parte del percorso: si lavora sui passaggi posturali, sul cammino e sulle attività quotidiane reali, coinvolgendo quando serve anche i familiari o i caregiver.',
    punti: [
      'Riabilitazione post-operatoria nella fase iniziale',
      'Recupero dell’autonomia negli spostamenti e nel cammino',
      'Percorsi dedicati alla persona anziana',
      'Coinvolgimento di familiari e caregiver'
    ],
    inHome: false
  },
  {
    slug: 'pwr-moves-parkinson',
    icon: 'i-heroicons-user-group',
    color: 'secondary',
    title: 'PWR!Moves® — Malattia di Parkinson',
    description:
      'Esercizio specifico per la malattia di Parkinson, come terapista certificato PWR!Moves®.',
    dettaglio:
      'PWR!Moves® è un programma di esercizio sviluppato specificamente per la malattia di Parkinson, che allena movimenti ampi, rapidi e funzionali per contrastare la rigidità e la bradicinesia. In quanto terapista certificato dal 2021, costruisco sedute adattate alla fase di malattia e alla risposta alla terapia farmacologica, con l’obiettivo di mantenere autonomia e qualità di vita.',
    punti: [
      'Terapista certificato PWR!Moves® dal 2021',
      'Esercizi ad alta ampiezza e alta intensità',
      'Lavoro su equilibrio, cammino e passaggi posturali',
      'Programma sostenibile da proseguire nel tempo'
    ],
    inHome: false
  }
]

export const serviziHome = servizi.filter(s => s.inHome)
