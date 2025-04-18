import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAddProposal from "../project/useAddProposal";

export default function useAddProposalForm(FIELDS) {
  const param = useParams();
  const { mutate, isPending } = useAddProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(formData) {
    mutate({
      [FIELDS.DURATION]: formData.duration,
      [FIELDS.PRICE]: formData.price,
      [FIELDS.DESC]: formData.description,
      projectId: param.id,
    });
  }

  return { register, handleSubmit, errors, onSubmit, isPending };
}
