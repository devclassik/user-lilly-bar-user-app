import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For redirection

const LOCAL_STORAGE_KEYS = {
  AUTH: "ar",
};

export const useMemory = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);


  const navigate = useNavigate();

  const getAllData = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return null;
    }
  };

  const setData = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      if (key === LOCAL_STORAGE_KEYS.AUTH) {        
        const updatedData = getAllData(LOCAL_STORAGE_KEYS.AUTH);
        if (updatedData) {
          setToken(updatedData.access);
          setRefreshToken(updatedData.refresh);
          setIsAuthenticated(true);
        }
      }
    } catch (error) {
      console.error(`Error saving localStorage key "${key}":`, error);
    }
  };

  const removeData = (key) => {
    localStorage.removeItem(key);
  };

  const clearAllData = () => {
    localStorage.clear();
  };

  const login = (accessToken, refreshToken) => {
    setIsAuthenticated(true);
    setToken(accessToken);
    setRefreshToken(refreshToken);
  };

  const checkAuth = () => {
    const authData = getAllData(LOCAL_STORAGE_KEYS.AUTH);
    if (authData?.access && authData?.refresh) {
      setIsAuthenticated(true);
      setToken(authData.access);
      setRefreshToken(authData.refresh);
    } else {
      setIsAuthenticated(false);
      setToken(null);
      setRefreshToken(null);
    }
    setLoading(false);
  };

  // Logout function
  const logout = () => {
    removeData(LOCAL_STORAGE_KEYS.AUTH);
    setIsAuthenticated(false);
    setToken(null);
    setRefreshToken(null);
    navigate("/sign-in");
  };

  useEffect(() => {
    checkAuth();
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  console.log("tooooooo", token, refreshToken);

  return {
    getAllData,
    setData,
    removeData,
    clearAllData,
    isAuthenticated,
    token,
    loading,
    login,
    checkAuth,
    logout,
    refreshToken,
  };
};
