import { InputField } from "../../UI/InputFields";
import { MainButton } from "../../UI/MainButton";

export function ProfileForm({ userName, userEmail, onChange, onSave, onCancel }) {

    const handleInputChange = (field) => (e) => {
        onChange(field, e.target.value);
    };

    return (
        <>
            <div className="mb-4">
                <InputField
                    label="New Name"
                    type="text"
                    name="name"
                    id="name"
                    value={userName}
                    onChange={handleInputChange('userName')}
                />
            </div>
            <div className="mb-4">
                <InputField
                    label="New Email"
                    type="email"
                    name="email"
                    id="email"
                    value={userEmail}
                    onChange={handleInputChange('userEmail')}
                />
            </div>
            <div className="flex justify-between">
                <MainButton title="Save" onClick={onSave} />
                <MainButton title="Cancel" onClick={onCancel} />
            </div>
        </>
    );
}