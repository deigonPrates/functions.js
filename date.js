 /*
 recebe um datatime padrão USA e retorna um data padrão BR
 */
 function dateToBR(date){
            return date.split(' ')[0].split('-').reverse().join('-');
 }
