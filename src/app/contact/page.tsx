import Header from '@/components/Sections/Header';
import Form from '@/components/Form';

const Contact = () => {
  return (
    <main className="flex flex-col overflow-hidden min-h-screen">
      <div className='bg-jumbotron bg-no-repeat bg-cover bg-center bg-fixed'>
        <Header />
        <Form/>
      </div>
    </main>
  )
}

export default Contact;
