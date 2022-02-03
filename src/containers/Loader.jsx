import { SpinnerCircular } from 'spinners-react';
export default function Loader() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
            <SpinnerCircular color = '#1F2937' size={50} secondaryColor="white" />
            </div>
        </div>
    );
}
