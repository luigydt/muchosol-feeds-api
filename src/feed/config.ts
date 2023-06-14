enum StateTipe {
    PUBLICADO = 'released',
    BORRADOR = 'drat'
}

export const feedModuleConfig = {
    nameModel: 'feed',
    id: 'feedId',
    stateEnun: StateTipe,
    url: 'url',
    defaultNoticeType: 'notice',
    events: {
        scrap: 'scrap-url'
    }
}