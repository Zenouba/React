import { useEffect } from "react";


export const Informations = ({ data, setData, setIsNextDisabled }) => {
    useEffect(() => {
      const isValid =
        data.companyName.trim() !== "" &&
        data.slug.trim() !== "" &&
        data.Categories.trim() !== "";
  
        setIsNextDisabled(!isValid); 
    }, [data, setIsNextDisabled]);
    return (
        <div>
            <div className="text-center mb-4 mt-5">
                <h1>Register your company</h1>
                <p className="text-muted">Basic information, You can add more later</p>
            </div>

            <div className="card-body row w-100 shadow m-auto px-3 rounded-4">
                <label className="form-label text-muted text-start mt-3">Company Name</label>
                <input
                    type="text"
                    style={{width:"550px",height:"40px"}}
                    value={data.companyName}
                    onChange={(e) => {
                        setData({ ...data, companyName: e.target.value });
                    }}
                    className="form-control pb-2 pt-2 "
                    placeholder="Write your company name"
                    required
                />

                <div className="mb-3">
                    <label className="form-label text-muted text-start mt-3">Company Slug</label>
                    <div className="input-group"style={{width:"538px"}}>
                        <span className="input-group-text text-muted" style={{marginLeft:"-10px"}}>www.datetric.com/</span>
                        <input
                            type="text"
                            className="form-control pt-2"
                            value={data.slug}
                            onChange={(e) => {
                                setData({ ...data, slug: e.target.value });
                            }}
                        />
                    </div>
                </div>

                <label className="form-label text-muted mt-1">Categories</label>
                <select
                    className="form-select rounded-3 text-muted mb-4"
                    style={{width:"550px",height:"40px"}}
                    name="category"
                    value={data.Categories}
                    onChange={(e) => {
                        setData({ ...data, Categories: e.target.value });
                    }}
                >
                    <option value="">Category</option>
                    <option value="Spa">Sport & Gym</option>
                    <option value="Nails">Schools</option>
                    <option value="Haircut">Teaching</option>
                    <option value="Haircut">Universities</option>
                    <option value="Haircut">Yoga Trainers</option>
                </select>
            </div>
        </div>
    );
};
