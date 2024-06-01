
import Logo from './Logo';
import Action from './Action';

const Header = () => {
    return (
        <>
            <header>
                 <nav class="navbar navbar-expand-lg bg-success bg-opacity-75">
                     <div class="container">
                        <Logo/>
                        <Action/>
                     </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
