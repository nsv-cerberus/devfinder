import { useFieldValidationContext } from "@/components/fields/contexts/FieldValidationContext";
import Button from "@/components/ui/button/Button";

export function SignUpButton() {
    const { triggerAllValidators } = useFieldValidationContext();

    const onClick = () => {
        triggerAllValidators();
    }

    return (
        <Button onClick={ onClick }>Sign Up</Button>
    )
}