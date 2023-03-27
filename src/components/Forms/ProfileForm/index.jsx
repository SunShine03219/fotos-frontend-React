import { InputField } from "../../UI/InputFields";
import { MainButton } from "../../UI/MainButton";

export function ProfileForm({ userName, userEmail, isChangingPassword, setIsChangingPassword, currentPassword, newPassword, onChange, onSave, onCancel }) {

    const handleInputChange = (field) => (e) => {
        onChange(field, e.target.value)
    }

    const handleToggleChange = () => {
        setIsChangingPassword(!isChangingPassword)
    }

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
            {isChangingPassword && (
                <div className="mb-4">
                    <InputField
                        label="Current Password"
                        type="password"
                        name="current_password"
                        id="current_password"
                        value={currentPassword}
                        required
                        onChange={handleInputChange('currentPassword')}
                    />
                    <InputField
                        label="New Password"
                        type="password"
                        name="password"
                        id="password"
                        required
                        value={newPassword}
                        onChange={handleInputChange('newPassword')}
                    />
                </div>
            )}
            <div className="mb-4">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="form-checkbox sr-only peer"
                        checked={isChangingPassword}
                        onChange={handleToggleChange}
                    />
                    <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Do you want to change the password?</span>
                </label>
            </div>
            <div className="flex justify-between">
                <MainButton title="Save" onClick={onSave} />
                <MainButton title="Cancel" onClick={onCancel} cancel={true}/>
            </div>
        </>
    );
}