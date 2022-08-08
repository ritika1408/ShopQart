class ApiFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
        //query in url means anything after ?
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex: this.queryStr.keyword,
                $options: "i",//case insensitive
                
            },
        }:{};

       
       this.query = this.query.find({...keyword});
       return this;
    }

    filter(){
        const queryCopy = {...this.queryStr};
        
        //Removing some field for category
        const removeFields = ["Keyword","page", "limit"]
        removeFields.forEach(key=> delete queryCopy[key])

        //filter for price and rating

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;

        //case sensitive

        

    }
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage -1);
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}
module.exports= ApiFeatures;