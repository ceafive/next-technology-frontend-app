import { RequestHandler } from "express";
import config from "../../config";
import axios from "axios";

/**
 *  Search for content within the iTunes Store, App Store, iBooks Store and Mac App Store:
 */
const getContent: RequestHandler = async (req, res) => {
  try {
    const { searchTerm } = req.query;

    if (searchTerm) {
      const searchURI =
        config.appleSearchBaseURI +
        "/search?term=" +
        encodeURIComponent(searchTerm as string);

      const apiResponse = await axios.get(searchURI);
      const data = apiResponse.data;

      return res.status(200).json(data);
    } else {
      return res.status(400).json({
        message: "No search term passed",
        success: true,
        results: [],
      });
    }
  } catch (error: any) {
    return res.status(400).json({
      message: error?.messsage || "An error occured",
      success: false,
      results: [],
    });
  }
};

export default getContent;
