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

export function table(element) {
  return (
    <tr key={ element.id }>
      <td>{element.description}</td>
      <td>{element.tag}</td>
      <td>{element.method}</td>
      <td>{Number(element.value).toFixed(2)}</td>
      <td>{element.exchangeRates[element.currency].name}</td>
      <td>{Number(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
      <td>
        {Number(element.value * element.exchangeRates[element.currency].ask)
          .toFixed(2)}

      </td>
      <td>Real</td>
    </tr>
  );
}
