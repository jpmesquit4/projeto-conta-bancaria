import { loginAdmin } from "../../repository/adminRepository.js";

export default async function logarAdminService(email, senha) {
  
  if (!email)
    throw new Error("Informe o email!")
  
  if (!senha)
    throw new Error("Informe o senha!")

  let resp = await loginAdmin(email, senha);
  return resp;

}