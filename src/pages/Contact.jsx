
import '../assets/css/contactPage.css'
import Header from '../components/Header';

function ContactPage(){
    return(
        <div>
            <Header></Header>
            <div className="contacPage-div">
                <h1>Contac us</h1>
                <div></div>
                <form className='contac-form'>
                    <div>
                        <label>Name:</label>
                        <div>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <label>Last name:</label>
                        <div>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <label>Mail:</label>
                        <div>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <label>Tel:</label>
                        <div>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default ContactPage;