var styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[styles.length - 2] = 'Classic';
alert( styles.shift() );
styles.unshift('Rap', 'Reggy');
console.log(styles);