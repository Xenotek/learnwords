import React from 'react'

export const getDateTime = datetime => new Date(datetime * 1000).toLocaleString()

export const getItemsLength = items => {
  switch (typeof items) {
    case 'object':
      return Object.keys(items).length
    case 'number':
    default:
      return items
  }
}

export const transliterate = word => {
  let A = {
    'ё':'yo',
    'й':'i',
    'ц':'ts',
    'у':'u',
    'к':'k',
    'е':'e',
    'н':'n',
    'г':'g',
    'ш':'sh',
    'щ':'sch',
    'з':'z',
    'х':'h',
    'ф':'f',
    'ы':'i',
    'в':'v',
    'а':'a',
    'п':'p',
    'р':'r',
    'о':'o',
    'л':'l',
    'д':'d',
    'ж':'zh',
    'э':'e',
    'я':'ya',
    'ч':'ch',
    'с':'s',
    'м':'m',
    'и':'i',
    'т':'t',
    'б':'b',
    'ю':'yu',
    ' ': '-'
  }

  let result = '';

  word = word.toLowerCase();

  word.split('').forEach(letter => {
    if(!(/[ьъ»«()]/.test(letter))) {
      result += A[letter] || letter
    }
  })

  return result;
}

// const sortByPrice = (items, price) => {
//   return items.filter(item => item['variant_price'] > price)
// }

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component'

export const SingleComponentPage = () => (BaseComponent) => {
  class SingleComponentPage extends React.PureComponent {
    componentDidMount () {
      window.scrollTo(0, 0)
    }

    render () {
      return <BaseComponent/>
    }
  }

  SingleComponentPage.displayName = `SingleComponentPage(${getDisplayName(BaseComponent)})`;

  return SingleComponentPage
}
