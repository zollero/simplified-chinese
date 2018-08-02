
interface Chinese {
    
    covertToPinyin(words: string, options?: Chinese.covertToPinyinOptions): string

    getFirstLetters(words: string, options?: Chinese.getFirstLettersOptions): string
}




/************************************************
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
************************************************/

declare namespace Chinese {

    export interface covertToPinyinOptions {

    }

    export interface getFirstLettersOptions {

    }

    export interface getEveryLettersOptions {

    }
}