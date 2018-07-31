
interface Chinese {
    
    covertToPinyin(word: string, options?: Chinese.covertToPinyinOptions): string

    getFirstLetters(word: string, options?: Chinese.getFirstLettersOptions): string
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
}