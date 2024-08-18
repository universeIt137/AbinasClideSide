import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import UserInput from "../../Shared/UserInput";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import Loader from "../../Shared/Loader";

const PersonalInformation = ({ onNext }) => {
  const cookies = new Cookies()
  const { handleSubmit, register, formState, } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const [fileSizeError, setFileSizeError] = useState('');
  const [userFileSize, setUserFileSize] = useState({});
  const navigate = useNavigate();
  const phone = cookies.get("phone");
  const name = cookies.get("name");
  const memberId = cookies.get("memberId");
  const accessToken = cookies.get('accessToken')

  // console.log(userData)

  // const userDataFromCookie = cookies.get('user')
  // console.log(userDataFromCookie)
  // setUserData(userDataFromCookie);




  const generatePayload = (values) => {

    let payload = new FormData();
    for (var key in values) {
      payload.append(key, values[key]);
    }

    return payload;
  };


  // console.log(nidCopySize)

  const onSubmit = (data) => {

    const personalInformation = {
      memberId,
      name: data.name,
      nameBangla: data.nameBangla,
      phone: data.phone,
      fathersName: data.fathersName,
      mothersName: data.mothersName,
      dob: data.dob,
      nidNumber: data.nidNumber,
      email: data.email,
      applicationDate: data.applicationDate,
      maritalStatus: data.maritalStatus,
      applicantPhoto: data.applicantPhoto[0],
      nidCopy: data.nidCopy[0],
      signature: data.signature[0],
    };

    setUserFileSize({
      userApplicantCopySize: Math.ceil(data.applicantPhoto[0].size) / 1024,
      userNidCopySize: Math.ceil(data.nidCopy[0].size) / 1024,
      userSignatureSize: Math.ceil(data.signature[0].size) / 1024,
    })


  const fileSizeObj =  {
      userApplicantCopySize: Math.ceil(data.applicantPhoto[0].size) / 1024,
      userNidCopySize: Math.ceil(data.nidCopy[0].size) / 1024,
      userSignatureSize: Math.ceil(data.signature[0].size) / 1024,
    }

    const { userApplicantCopySize, userNidCopySize, userSignatureSize } =
      fileSizeObj;

    if (
      userApplicantCopySize <= 220 &&
      userNidCopySize <= 220 &&
      userSignatureSize <= 220
    ) {
      const payload = generatePayload(personalInformation);
      setIsLoading(true);
      fetch(
        `http://localhost:5000/api/v1/userapplication/updatepersonalinformation/${phone}`,
        {
          method: "PATCH",
          headers: {
            Authorization: accessToken
          },
          body: payload,
        }
      )
        .then((res) => res.json())
        .then((data) => { 
          if (data?.status !== "failed") {
            navigate("/v/apply-membership/job-description");
            toast.success("Personal Information was saved");
            setIsLoading(false);
          } else {
            toast.error("something went wrong");
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const isFormValid = formState.isValid;
  return (
    <div className="xl:w-[1300px] xl:mx-auto">
      {isLoading && <Loader forProcess={true}></Loader>}

      <span className="lg:ml-20 px-2">
        Membership Apply&gt;
        <span className="text-secondary">
          Personal Information
        </span>
      </span>

      <h2 className="Service-headline text-center text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-950 via-blue-900 to-blue-300">
        Member Apply Form
      </h2>

      <h2 className="w-[210px] sm:mx-auto text-black border-2 border-secondary border-solid font-bold text-lg bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-md mt-5 lg:ml-[1%] mb-[-20px]">
        Personal Information
      </h2>
      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 sm:w-[100%] sm:pl-8 md:p-4">
          <div>
            <UserInput
              label="Name"
              name="name"
              inputType="text"
              defaultValue={name}
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />

            <UserInput
              label="Father's Name"
              name="fathersName"
              inputType="text"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />

            <UserInput
              label="Date of Birth"
              name="dob"
              inputType="date"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />

            <UserInput
              label="Mobile Number"
              name="phone"
              defaultValue={phone}
              inputType="text"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />
            <div>
              <label className="text-black font-semibold text-lg">
                Maritial Status
              </label>
              <br />
              <select
                className="w-[90%] h-[38px] p-2 border-[1px] border-black rounded-md mt-1"
                {...register("maritalStatus", { required: true })}
              >
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
              </select>
            </div>
          </div>

          <div>
            <UserInput
              label="Name (Bangali)"
              name="nameBangla"
              inputType="text"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />

            <UserInput
              label="Mother's Name"
              name="mothersName"
              inputType="text"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />

            <UserInput
              label="NID Number"
              name="nidNumber"
              inputType="text"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />

            <UserInput
              label="E-mail"
              name="email"
              inputType="email"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />

            <UserInput
              label="Date"
              name="applicationDate"
              inputType="date"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />
          </div>
          <div>
            <UserInput
              label="Applicant Photo:"
              name="applicantPhoto"
              inputType="file"
              required="required"
              register={register}
              formState={formState}
              customInputStyle="border border-gray-300 px-4 py-2 rounded-xl cursor-pointer h-[50px]"
              customLabelStyle=""
            />
            {userFileSize.userApplicantCopySize > 220 ? <h2 className="text-red-600 text-sm">File size should be less then 200 KB</h2> : ''}

            <UserInput
              label="NID copy:"
              name="nidCopy"
              inputType="file"
              // fileSize = {nidCopySize}
              required="required"
              register={register}
              formState={formState}
              customInputStyle="border border-gray-300 px-4 py-2 rounded-xl cursor-pointer h-[50px]"
              customLabelStyle=""
            />
            {userFileSize.userNidCopySize > 220 ? <h2 className="text-red-600 text-sm">File size should be less then 200 KB</h2> : ''}

            <UserInput
              label="Signeture:"
              name="signature"
              inputType="file"
              required="required"
              register={register}
              formState={formState}
              customInputStyle="border border-gray-300 px-4 py-2 rounded-xl cursor-pointer h-[50px]"
              customLabelStyle=""
            />
            {userFileSize.userSignatureSize > 220 ? <h2 className="text-red-600 text-sm">File size should be less then 200 KB</h2> : ''}

          </div>
        </div>
        <button
          type="submit"
          // disabled={!isFormValid}
          className="bg-secondary text-white py-1 px-8 cursor-pointer mt-[11px] text-2xl block mx-auto rounded"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
