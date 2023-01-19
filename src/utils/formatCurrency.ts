const formatCurrency = (current : number): string => {
    return current.toLocaleString(
        'pt-br',
        { style: 'current', currency: 'BRL' }
    ) 
};

export default formatCurrency;