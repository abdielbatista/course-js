let permissao = 'admin';

switch(permissao){
    case 'comum':
        console.log('user comum');
        break;

    case 'gerente':
        console.log('user gerente');
        break

    case 'admin':
        console.log('admin');
        break

    default: 
    console.log('error')
}