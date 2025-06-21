import Modal from '@/components/modal/Modal';
import Code from './components/code/Code';

export default function ConfirmRegistrationModal() {
  return (
    <Modal>
      <div className="confirm-registration-modal">
        <h1>Registration Successful</h1>
        <p className="description">Your account has been successfully created!</p>
        <p className="description">Please check your email to confirm your registration.</p>
        <Code />
      </div>
    </Modal>
  );
}