import React from 'react';

export const fields = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'];

export function tableFields(elements) {
  return (<th>{elements}</th>);
}
